import React from 'react'
import IContent from '../../models/IContent'
import { Card, Image, Typography } from 'antd'
import cls from './ContentCard.module.scss'

const ContentCard = ({ content }: { content: IContent }) => {
  return (
    <Card>
      <div className={cls.contentContainer}>
        <div className={cls.contentImageContainer}>
          {content.fakeImageUrl && <Image
            src={content.fakeImageUrl}
          />}
          <img className={cls.tag} alt={'fake'} src={'/assets/legitIcons/fake.png'} />
        </div>

        <div className={cls.contentImageContainer}>
          {content.originalImageUrl && <Image
            src={content.originalImageUrl}
          />}
          <img className={cls.tag} alt={'legit'} src={'/assets/legitIcons/legit.png'} />
        </div>
      </div>
      <Typography.Text>
        {content.imageDescription}
      </Typography.Text>
    </Card>
  )
}

export default ContentCard