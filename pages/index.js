import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Blog} from '../components/Blog'
import { IpfsSection } from '../components/IpfsSection'
import { IndicativeForm } from '../components/IndicativeForm'

export function getStaticProps() {
  console.log('running getstatic props')
  const d = new Date();
  return {
    props: {
      data: d.toISOString(),
    },
    revalidate: 60
  }
}

export default function Home({data}) {
  return (
    <div>
      <div style={{alignItems:'center',flexDirection:'column',margin:'0px auto',backgroundColor:'#d3d3d3',display:'flex',  width:'800px', marginTop:'100px'}}>
        <IpfsSection  data={data}/>
        <IndicativeForm />
      </div>
    </div>
  )
}

