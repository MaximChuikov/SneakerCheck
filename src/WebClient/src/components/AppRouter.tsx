import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import { Typography } from 'antd'
import AppContainer from '../pages/AppContainer'
import Landing from '../pages/Landing'
import ModelSearch from '../pages/ModelSearch'
import Instruction from '../pages/Instruction'
import Shops from '../pages/Shops'
import InstructionsPreviews from '../pages/InstructionsPreviews'

export enum RouteNames {
  LOGIN = '/login',
  SEARCH = '/search',
  INSTRUCTIONS = '/instructions',
  SHOPS = '/shops',
  EVENT = '/'
}

export enum Params {
  instructionId = '/:instructionId',
  shopId = '/:shopId',
}

const AppRouter = () => {
  // const {isAuth} = useTypedSelector(state => state.auth);


  return (
    <Routes>
      <Route element={<AppContainer />}>
        <Route path={RouteNames.EVENT} element={<Landing />} />
        <Route path={RouteNames.LOGIN} element={<Login />} />
        <Route path={RouteNames.SEARCH} element={<ModelSearch />} />
        <Route path={RouteNames.INSTRUCTIONS} element={<InstructionsPreviews />} />
        <Route path={`${RouteNames.INSTRUCTIONS}${Params.instructionId}`} element={<Instruction />} />
        <Route path={RouteNames.SHOPS} element={<Shops />}>
          <Route path={`${RouteNames.SHOPS}${Params.shopId}`} element={<Instruction />} />
        </Route>

        <Route path={'*'} element={<Typography>Не найдена страница 404</Typography>} />
      </Route>
    </Routes>
  )
}

export default AppRouter
