import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-full flex flex-wrap justify-between">
        <div className="w-full px-4 py-2 md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Sobre nós</h2>
          <p>
            Somos uma equipe apaixonada por fantasy football, dedicada a
            fornecer a melhor experiência aos nossos usuários.
          </p>
        </div>
        <div className="w-full px-4 py-2 md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Links úteis</h2>
          <ul>
            <li>
              <Link href="#">Termos de Serviço</Link>
            </li>
            <li>
              <Link href="#">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="#">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="w-full px-4 py-2 md:w-1/3">
          <h2 className="text-xl font-bold mb-2">Siga-nos</h2>
          <div className="flex flex-col">
            <Link
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-twitter">Twitter</i>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-instagram">Instagram</i>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Fantasy Football. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
