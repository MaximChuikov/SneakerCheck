import React from 'react'
import {SearchOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Col, Flex} from 'antd'
import cls from './Landing.module.scss'
import {useNavigate} from 'react-router-dom'
import {RouteNames} from '../../components/AppRouter'
import GradientText from '../../components/GradientText'

const Landing = () => {
    const navigation = useNavigate()

    function searchNavigate() {
        navigation(RouteNames.SEARCH)
    }

    function searchNavigateShops() {
        navigation(RouteNames.SHOPS)
    }

    function createNavigate() {
        navigation(RouteNames.CREATE_INSTRUCTION)
    }

    return (
        <Flex vertical gap={'large'} justify={'center'} style={{marginTop: '80px'}}>
            <Flex className={cls.titleSneakersContainer} justify={'center'}>
                <Col span={12}>
                    <GradientText text={'LegitCheck - новый сервис проверки ваших кроссовок.'}/>
                </Col>
                <Col span={12}>
                    <div className={cls.sneakers}>
                        <img alt={'Кросы'} src={'/assets/AirJordan.png'}/>
                    </div>
                </Col>
            </Flex>

            <Flex span={15} justify={'center'} style={{marginTop: '5vh'}}>
                <Button onClick={searchNavigate} size={'large'} type="primary" icon={<SearchOutlined/>}>Найти
                    модель</Button>
            </Flex>


            <Flex span={24} justify={'center'} style={{marginTop: '5vh'}}>
                <GradientText text={'Посмотрите магазины в вашем городе'}/>
            </Flex>
            <Flex span={15} justify={'center'} style={{marginTop: '5vh'}}>
                <Button onClick={searchNavigateShops} size={'large'} type="primary" icon={<SearchOutlined/>}>Посмотреть
                    магазины</Button>
            </Flex>

            <Flex span={24} justify={'center'} style={{marginTop: '5vh'}}>
                <GradientText text={'Создание инструкции'}/>
            </Flex>
            <Flex span={15} justify={'center'} style={{margin: '5vh 0'}}>
                <Button onClick={createNavigate} size={'large'} type="primary" icon={<PlusOutlined/>}>Создать инструкцию</Button>
            </Flex>
        </Flex>

    )
}

export default Landing