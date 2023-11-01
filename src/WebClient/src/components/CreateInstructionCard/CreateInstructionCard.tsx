import React, {RefObject, useState} from 'react';
import {Card, Divider, Form, UploadFile, UploadProps} from "antd";
import Dragger from "antd/es/upload/Dragger";
import {InboxOutlined} from "@ant-design/icons";
import cls from "../ContentCard/ContentCard.module.scss";
import ReactQuill from "react-quill";
import * as Markerjs2 from "markerjs2";

const CreateInstructionCard = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const imgOriginalRef = React.createRef<HTMLImageElement>();
    const imgFakeRef = React.createRef<HTMLImageElement>();

    function showMarkerArea(ref: RefObject<HTMLImageElement>) {
        if (ref.current !== null) {
            const markerArea = new Markerjs2.MarkerArea(ref.current);
            markerArea.settings.displayMode = "popup"
            markerArea.settings.defaultColorSet = ['#ED522F', '#28C98E']
            markerArea.settings.defaultFillColor = 'transparent'
            markerArea.addEventListener('render', event => {
                if (ref.current) {
                    ref.current.src = event.dataUrl;
                }
            });
            markerArea.show();
        }
    }

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: null,
        onChange(info) {
            setFileList(info.fileList)
        },
    };

    const getImageUrl = (file) => {
        if (file && file.originFileObj) {
            return URL.createObjectURL(file.originFileObj);
        }
        return null;
    };

    function validateFilesCount() {
        return fileList.length >= 1 ? Promise.resolve() : Promise.reject('Нужно прикрепить хотя бы одно фото');
    }

    return (
        <Card>
            <Divider>Редактируемые фотографии</Divider>
            <Form.Item name="photos" rules={[{required: true, validator: validateFilesCount}]}>
                <Dragger name={'Dragger'} maxCount={2} directory={false} beforeUpload={() => false} {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">Кликните или дропните файлы сюда</p>
                    <p className="ant-upload-hint">
                        Вы можете добавить не более двух фотографий любого формата. Выберите оригинал, затем фейк и
                        загрузите их.
                    </p>
                </Dragger>
            </Form.Item>

            <Divider>Выделение различий</Divider>

            <div className={cls.contentContainer}>
                {
                    fileList[1] && (
                        <div className={cls.contentImageContainer}>
                            <img className={cls.contentImage} src={getImageUrl(fileList[1]) ?? ''} alt={'Фейк'}
                                 ref={imgFakeRef} onClick={() => showMarkerArea(imgFakeRef)}/>
                            <img className={cls.tag} alt={'fake'} src={'/assets/legitIcons/fake.png'}/>
                        </div>
                    )
                }
                {
                    fileList[0] && (
                        <div className={cls.contentImageContainer}>
                            <img className={cls.contentImage} src={getImageUrl(fileList[0]) ?? ''} alt={'Оригинал'}
                                 ref={imgOriginalRef} onClick={() => showMarkerArea(imgOriginalRef)}/>
                            <img className={cls.tag} alt={'legit'} src={'/assets/legitIcons/legit.png'}/>
                        </div>
                    )
                }
            </div>

            <Form.Item
                name="description"
                label="Описание"
                rules={[{required: true, message: 'Введите описание различий'}]}
                style={{marginTop: '24px'}}
            >
                <ReactQuill/>
            </Form.Item>
        </Card>
    );
};

export default CreateInstructionCard;