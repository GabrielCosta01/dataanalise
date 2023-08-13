"use client"
import Image, { StaticImageData } from "next/image";
import linkedinIcon from "src/assets/linkedinIcon.png";
import instagramIcon from "src/assets/instagramIcon.png";
import NavBar from "../components/NavBar";
import circuloDataAnalise from "src/assets/circulodataanalise.png";
import obrasDataAnaliseProduto from "src/assets/inteligenciaMercado.png";
import energiaSolarDataAnaliseProduto from "src/assets/energiaSolarPrint.png";
import biDataAnaliseProduto from "src/assets/bidataanalise.png";
import customizadoDataAnaliseProduto from "src/assets/customizada.png";
import lupa from "src/assets/lupa.png";
import Contact from "@/components/contact";
import ilustracaoBI from "src/assets/mulherbi.png";
import  zapIcon  from "src/assets/zap.png";

interface IProduct{
	title: string
	description: string
	img: StaticImageData
}

const Home = () => {

	const products:IProduct[] = [
		{
			title: "Prospecção de obras",
			description: "Temos um banco de dados vasto, com informações do mercado nacional, com esses dados, a sua empresa consegue ouvir os dados que falam com voces, mas as vezes vocês não escutam.",
			img: obrasDataAnaliseProduto
		},
		{
			title: "Energia Solar",
			description: "Uma base de dados de todas as usinas solares instaladas no Brasil, temos dados que ajudara na prospecção dos seus clientes, trazendo inteligencia de qual o melhor segmento para se ter um ticket maior.",
			img: energiaSolarDataAnaliseProduto
		},
		{
			title: "Inteligencia de Mercado",
			description: "Temos um banco de dados vasto, com informações do mercado nacional, com esses dados, a sua empresa consegue ouvir os dados que falam com voces, mas as vezes vocês não escutam.",
			img: biDataAnaliseProduto
		},
		{
			title: "Consulta personalizada",
			description: "Aqui fazemos um projeto direcionado para a sua empresa com a utilização dos seus dados e a nossa inteligencia de negocio.",
			img: customizadoDataAnaliseProduto
		},
	]

  	return (
		<div className="min-h-screen w-full">
			<NavBar />
			<main>
				<section className="my-0 h-screen flex items-center justify-center bg-gray-200 p-8">
				<div className="flex-row gap-16 items-center mx-auto lg:flex ">
					<Image
						className="hidden lg:flex"
						width={300}
						src={circuloDataAnalise}
						alt="icon BI"
					/>

					<div>
						<h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">Quem somos?</h2>
						<p className="text-base lg:text-2xl text-center">
							A Data Análise é uma empresa especializada em análise de dados, com 18 anos de experiência no mercado de
							BI. Trabalhamos com dados do Brasil inteiro, desde usinas solares instaladas até obras que acontecem no
							país.
						</p>
					</div>
					
				</div>
				</section>

				<section id="produtos" className="my-0 p-12 h-min:h-screen flex flex-col items-center justify-center py-8 gap-4 bg-yellowDataAnalise">
					<div className="w-full flex items-start">
						<h1 className="text-3xl text-center lg:text-left lg:text-5xl font-medium lg:font-medium mb-8 w-full lg:pl-14 text-gray-100 ">Produtos</h1>
					</div>
					<div className="flex flex-col gap-8 items-center mx-auto lg:flex">
						<ul className="flex flex-wrap gap-12">
							{
								products.map((product, i) => (
								<li key={i} className="flex flex-col lg:flex lg:flex-row lg:gap-12">
									<Image className="w-full lg:w-1/4 text-gray-100" src={product.img} alt={product.title} />
									<div className="flex flex-col gap-8">
									<h4 className="text-center text-3xl font-medium text-gray-100">{product.title}</h4>
									<p className="text-center text-gray-100 text-xl">{product.description}</p>
									</div>
								</li>
								))
							}
						</ul>
					</div>
				</section>

				<section id="o-que-fazemos" className="my-0 p-12 w-full h-screen flex flex-col lg:flex-row items-center justify-center py-8 gap-4">
					<Image src={lupa} alt="imagem de pessoas tendo um insight"/>
					<div className="flex flex-col items-center mx-auto gap-5 lg:flex-col lg:gap-16 lg:flex">
						<h2 className="text-3xl font-bold lg:text-5xl lg:font-bold mb-4">O que fazemos?</h2>
						<p className="text-base text-center">
						Na Data Análise, trabalhamos com análise de dados voltada para o mercado de energia solar no Brasil.
						Utilizamos tecnologias avançadas para extrair insights valiosos e auxiliar empresas e projetos nesse setor.
						</p>
					</div>
				</section>

				<section id="contact" className="my-0 w-full h-min:h-screen flex items-center justify-center py-8 bg-yellowDataAnalise">
					<div className="flex flex-col items-center justify-evenly gap-8 lg:flex-row">
						<div className="flex">

							<div className="flex flex-col justify-center items-center gap-2">
								<Image className="w-2/3" src={ilustracaoBI} alt="mao segurando relatorios"/>
								<h2 className="text-xl lg:text-2xl">Siga a gente nas Redes Sociais</h2>
								<div className="flex gap-8">
									<button type="button" onClick={()=>window.open("https://www.linkedin.com/company/dataanalise/")}><Image src={linkedinIcon} width={35} alt="ícone LinkedIn" /></button>
									<button type="button" onClick={()=>window.open("https://instagram.com/dataanaliseinteligencia")}><Image src={instagramIcon} width={35} alt="ícone Instagram" /></button>
									<button type="button" onClick={() => window.open("https://wa.me/64999913082")}><Image src={zapIcon} alt="icone do whatsApp" width={35}/></button>
								</div>
							</div>

						</div>
						<Contact/>

					</div>
				</section>

			</main>
		</div>
  	);	
};
export default Home;
