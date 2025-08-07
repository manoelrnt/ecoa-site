import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, Instagram, Linkedin, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoEcoa from '../assets/Logo Ecoa.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <img 
              src={logoEcoa} 
              alt="Ecoa Consultoria Ambiental" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Consultoria ambiental registrada no CRQ e inscrita no IBAMA, oferecendo soluções em 
              licenciamento ambiental, regularizações rurais e sustentabilidade aplicada desde 2017.
            </p>
            <div className="text-sm text-gray-400">
              <p>CNPJ: 26.960.573/0001-50</p>
              <Link 
                to="/documentos-legais" 
                className="text-green-400 hover:text-green-300 underline"
              >
                Todos os nossos registros e certificações podem ser consultados aqui.
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400" />
                <a 
                  href="https://wa.me/5531992351153"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (31) 99235-1153
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-400" />
                <a 
                  href="mailto:contato@ecoaconsultoria.com.br"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@ecoaconsultoria.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-green-400" />
                <span className="text-gray-300">
                  Segunda à sexta, 9h às 17h
                </span>
              </div>
            </div>
          </div>

          {/* Redes Sociais e Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com/ecoaconsultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
            
            <div className="space-y-2">
              <Link 
                to="/politica-privacidade"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Entre em Contato</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <Button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Ecoa Consultoria Ambiental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

