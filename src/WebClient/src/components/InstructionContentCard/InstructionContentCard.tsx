import React from 'react'
import IContent from '../../models/IContent'
import {Card, Divider, Image, Typography} from 'antd'
import cls from './InstructionContentCard.module.scss'

const InstructionContentCard = ({content}: { content: IContent }) => {
    return (
        <Card>
            <div className={cls.contentContainer}>
                <div className={cls.contentImageContainer}>
                    {content.fakeImageUrl && <Image
                        src={content.fakeImageUrl}
                    />}
                    <img className={cls.imageTag} alt={'fake'} src={'/assets/legitIcons/fake.png'}/>
                </div>

                <div className={cls.contentImageContainer}>
                    {content.originalImageUrl && <Image
                        src={content.originalImageUrl}
                    />}
                    <img className={cls.imageTag} alt={'legit'} src={'/assets/legitIcons/legit.png'}/>
                </div>
            </div>
            <Divider/>
            <Typography.Text>
                {content.imageDescription}
            </Typography.Text>
        </Card>
    )
}

export default InstructionContentCard