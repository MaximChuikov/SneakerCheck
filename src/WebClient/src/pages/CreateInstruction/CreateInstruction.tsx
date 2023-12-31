import React, {useState} from 'react';
import {
    Card,
    Form,
    Button,
    Divider,
    Flex,
} from 'antd';
import 'react-quill/dist/quill.snow.css';
import GradientText from "../../components/GradientText";
import {PlusOutlined, FileDoneOutlined} from '@ant-design/icons'
import CreateInstructionCard from "../../components/CreateInstructionCard";
import {IInstructionCard} from "./types";

const emptyCard: IInstructionCard = {description: '', photos: []}

const CreateInstruction = () => {
    const [form] = Form.useForm<string>();
    const [formValues, setFormValues] = useState<IInstructionCard[]>([emptyCard])

    function submitHandler(value) {
        console.log(value, 'SUBMIT')
    }

    function saveCallback(data: IInstructionCard, index: number) {
        setFormValues(prev => {
            const prevState = [...prev]
            prevState[index] = data
            return prevState
        })
    }

    return (
        <Flex size={'large'} justify={'center'} gap={16} vertical
              style={{maxWidth: '800px', margin: '16px auto 0 auto'}}>
            <Flex justify={"center"}>
                <GradientText text={'Создание инструкции'}/>
            </Flex>
            <Form hideRequiredMark form={form} onFinish={submitHandler}>
                <Flex vertical gap={'large'} size={'large'}>
                    {formValues.map((fv, idx) => <CreateInstructionCard formValues={fv} saveCallback={(data) => {saveCallback(data, idx)}} key={idx}/>)}

                    <Divider>Добавить карточку
                        <Button
                            onClick={() => setFormValues(prevState => [...prevState, emptyCard])} style={{marginLeft: '18px'}}
                            type="primary"
                            icon={<PlusOutlined/>}
                            size={'large'}
                        />
                    </Divider>

                    <Form.Item>
                        <Card>
                            <Flex justify={"center"} gap={'large'}>
                                <b>Инструкция готова?</b>
                                <Button type="primary" htmlType="submit" icon={<FileDoneOutlined />}>
                                    Сохранить инструкцию
                                </Button>
                            </Flex>
                        </Card>
                    </Form.Item>
                </Flex>
            </Form>
        </Flex>
    );
}

export default CreateInstruction