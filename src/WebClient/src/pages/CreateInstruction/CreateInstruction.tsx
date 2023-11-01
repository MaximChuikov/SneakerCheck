import React from 'react';
import {
    Card,
    Form,
    Button,
    Divider,
    Flex,
} from 'antd';
import 'react-quill/dist/quill.snow.css';
import GradientText from "../../components/GradientText";
import {PlusOutlined} from '@ant-design/icons'
import CreateInstructionCard from "../../components/CreateInstructionCard";


const CreateInstruction = () => {
    const [form] = Form.useForm();

    function submitHandler(value) {
        console.log(value)
    }

    return (
        <Flex size={'large'} justify={'center'} gap={16} vertical
              style={{maxWidth: '800px', margin: '16px auto 0 auto'}}>
            <Flex justify={"center"}>
                <GradientText text={'Создание инструкции'}/>
            </Flex>
            <Form hideRequiredMark form={form} onFinish={submitHandler}>
                <Flex vertical gap={'large'} size={'large'}>
                    <CreateInstructionCard />

                    <Divider>Добавить еще карточку
                        <Button onClick={() => {}} style={{marginLeft: '18px'}} type="primary" icon={<PlusOutlined/>} size={'large'}>
                            Добавить
                        </Button>
                    </Divider>

                    <Form.Item>
                        <Card>
                            <Flex justify={"center"} gap={'large'}>
                                <b>Инструкция готова?</b>
                                <Button type="primary" htmlType="submit" icon={<PlusOutlined />} >
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