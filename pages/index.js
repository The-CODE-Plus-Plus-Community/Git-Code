import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/index/Header';
import Banner from '../components/index/Banner';

export default function Home() {
  return (
    <div >
      <Header />
      <Banner name="John" movie="Sherlock" />
    </div>
  )
}
