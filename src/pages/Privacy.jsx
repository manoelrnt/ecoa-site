import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Como coletamos, usamos e protegemos suas informações pessoais
          </p>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Última atualização:</strong> Janeiro de 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações Gerais</h2>
                <p className="text-gray-700 leading-relaxed">
                  A Ecoa Consultoria Ambiental, inscrita no CNPJ 26.960.573/0001-50, está comprometida 
                  com a proteção da privacidade e dos dados pessoais de nossos clientes, visitantes do 
                  site e parceiros. Esta Política de Privacidade descreve como coletamos, usamos, 
                  armazenamos e protegemos suas informações pessoais.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podemos coletar as seguintes informações:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nome completo e informações de contato (e-mail, telefone)</li>
                  <li>Informações sobre sua empresa ou propriedade rural</li>
                  <li>Dados técnicos relacionados aos serviços solicitados</li>
                  <li>Informações de navegação no site (cookies, endereço IP)</li>
                  <li>Comunicações entre você e nossa empresa</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Prestar nossos serviços de consultoria ambiental</li>
                  <li>Responder às suas solicitações e dúvidas</li>
                  <li>Enviar informações sobre nossos serviços</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
                <p className="text-gray-700 leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando necessário para a prestação de nossos serviços, cumprimento de 
                  obrigações legais ou com seu consentimento expresso. Podemos compartilhar informações 
                  com órgãos ambientais competentes quando necessário para a execução dos serviços contratados.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Segurança dos Dados</h2>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                  suas informações pessoais contra acesso não autorizado, alteração, divulgação ou 
                  destruição. Nossos sistemas são regularmente atualizados e monitorados.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Retenção de Dados</h2>
                <p className="text-gray-700 leading-relaxed">
                  Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política, atender a obrigações legais ou resolver disputas. Dados 
                  técnicos relacionados a licenças ambientais podem ser mantidos por períodos mais 
                  longos conforme exigido pela legislação.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seus Direitos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Acesso às informações que mantemos sobre você</li>
                  <li>Correção de dados incorretos ou incompletos</li>
                  <li>Exclusão de dados quando aplicável</li>
                  <li>Portabilidade dos dados</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nosso site utiliza cookies para melhorar sua experiência de navegação, analisar o 
                  tráfego e personalizar conteúdo. Você pode configurar seu navegador para recusar 
                  cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Alterações nesta Política</h2>
                <p className="text-gray-700 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                  mudanças significativas através do nosso site ou por e-mail. Recomendamos que 
                  revise esta política regularmente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
                <p className="text-gray-700 leading-relaxed">
                  Para exercer seus direitos, esclarecer dúvidas sobre esta política ou reportar 
                  preocupações sobre privacidade, entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>E-mail:</strong> contato@ecoaconsultoria.com.br<br />
                    <strong>Telefone:</strong> (31) 99235-1153<br />
                    <strong>Endereço:</strong> Conselheiro Lafaiete, Minas Gerais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

