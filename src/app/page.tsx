"use client"

import { Typography } from "antd"
const { Title, Text } = Typography

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-primary-700 py-12">
        <div className="page-width">
          <Title style={{color: "rgba(255,255,255,.95)"}}>next-antd-template</Title>
          <Text style={{color: "rgba(255,255,255,.95)"}}>Make something epic.</Text>
        </div>
      </header>
    </main>
  )
}
