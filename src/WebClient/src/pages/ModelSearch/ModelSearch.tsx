import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AutoComplete, Flex } from 'antd'
import useFetch from '../../hooks/useFetch'
import { getSneakersModels } from '../../api/SneakersSearchService'
import { RouteNames } from '../../components/AppRouter'
import GradientText from '../../components/GradientText'

const ModelSearch = () => {
  const navigate = useNavigate()
  const models = useFetch(getSneakersModels)

  function handleSearch(inputValue: string, option: {modelName: string}) {
    return option.modelName.toLowerCase().includes(inputValue.toLowerCase())
  }

  const handleShoeClick = (
    //shoeId: string
  ) => {
    navigate(`${RouteNames.INSTRUCTIONS}`)
  }

  function getOptions(): any {
    return models.data ? models?.data?.map((model) => {
      return {
        value: model.modelId.toString(),
        modelName: model.modelName,
        label: (
          <div>
            <img style={{ width: '40px', marginRight: '8px' }} alt={'IMG'} src={model.imageUrl} />
            {model.modelName}
          </div>
        )
      }
    }) : []
  }

  return (
    <Flex style={{height: '70vh'}} vertical gap={30} justify={'center'} align={'center'} >
      <GradientText text={'Давайте найдем вашу модель'} />
      <AutoComplete
        placeholder={'Введите название модели...'}
        size={'large'}
        loading={models.loading}
        style={{ width: '60vw'}}
        filterOption={handleSearch}
        popupMatchSelectWidth={false}
        onSelect={handleShoeClick}
        options={getOptions()} />
    </Flex>

  )
}
export default ModelSearch