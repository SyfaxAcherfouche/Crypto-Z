import React from 'react'
import { Link } from "react-router-dom";
import millify from 'millify'
import { Typography, Row, Col, Stat, Statistic} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title } = Typography
const Homepage = () => {
    //const { data, isFetching } = useGetCryptosQuery()
    // const globalStats = data?.data?.stats 
    //console.log(data)

    // if(isFetching) return 'Loading... '
    return (
        <>
            <Title level={2} className='heading'>
                Global Crypto Stats 
            </Title> 
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={10002}/></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={50}/></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={15}/></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={50000}/></Col>
                <Col span={12}><Statistic title='Total Markets' value={5}/></Col>
            </Row>
        </>
    )
}

export default Homepage
