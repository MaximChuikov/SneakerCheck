import React from 'react'
import { Card, Col, Image, Rate, Row } from 'antd'
import IShop from '../../models/IShop'
import getSocialUrl from '../../utils/getSocialUrl'

const ShopCard = ({ content }: { content: IShop }) => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Image src={content.iconLink} />
        </Col>
        <Col span={12}>
          <Row gutter={[0, 8]}>
            <Col span={24}>
              <h3>{content.shopName}</h3>
            </Col>
            <Col span={24}>
              Город: {content.city}<br />Адрес: {content.address}
            </Col>
            <Col span={24}>
              <Rate disabled allowHalf defaultValue={content.rate} />
            </Col>
            <Col span={24}>
              <p>{content.description}</p>
            </Col>
          </Row>
        </Col>
        <Col offset={2} span={2}>
          {content.shopUrls.map((social) => (
            <Row key={social.socialName.toString()}>
              <a href={social.url} target={'_blank'}>
                <img width={54} height={54} alt={social.socialName.toString()} src={getSocialUrl(social.socialName)} />
              </a>
            </Row>
          ))}
        </Col>
      </Row>
    </Card>
  )
}

export default ShopCard