import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RouteNames } from '../../components/AppRouter'
import { Flex, Spin } from 'antd'
import useFetch from '../../hooks/useFetch'
import { getSneakersModels } from '../../api/SneakersSearchService'
import IInstruction from '../../models/IInstruction'
import ContentCard from '../../components/ContentCard'

const Instruction = () => {
  const {instructionId} = useParams();

  const navigate = useNavigate()
  useEffect(() => {
    console.log(instructionId, 'id')
    if (!instructionId) navigate(RouteNames.SEARCH)
  }, [instructionId])

  const model = useFetch<IInstruction[]>(getSneakersModels)

  return (
    <Flex size={'large'} justify={'center'} gap={16} vertical style={{maxWidth: '800px', margin: '16px auto 0 auto'}} >
      {model.loading
        ? <Spin />
        : model.data?.[0]?.content?.map((c) => <ContentCard content={c} /> ?? 'я пустой')
      }
    </Flex>
  )
}

export default Instruction