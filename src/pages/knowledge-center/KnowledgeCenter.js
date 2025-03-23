import React from 'react'
import Faq from '../../components/Faq'
import SeoMeta from '../../utils/SeoMeta'

const KnowledgeCenter = () => {
  return (
    <>
    <SeoMeta
      title="ToraTax FAQs | Answers to Your Tax Filing Questions"
      description="Find answers to common questions about ToraTax, online tax filing, security, refunds, deadlines, and more. Get expert guidance for a hassle-free tax experience."
      keywords="ToraTax FAQs, Online Tax Filing Help, Income Tax Return Questions, Tax Filing Support, Tax Refunds, Secure Tax Filing, E-Filing Assistance, Tax Compliance"
      author="ToraTax Team"
    />

      <section class="section" style={{minHeight:"100vh"}}>
      <Faq/>

      </section>
    </>
  )
}

export default KnowledgeCenter
