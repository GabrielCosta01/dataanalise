import Head from "next/head";
import "./globals.css";
import { Exo_2 } from "next/font/google";

const font = Exo_2({ subsets: ["latin"] })

export const metadata = {
	title: "Data Analise",
	description: "Especializados em BI",
}

export default function RootLayout(
	{
		children,
	}
	:
	{
	children: React.ReactNode
	}
){
	return (
		<html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Data Analise</title>
				<meta name="description" content="Especializados em BI" />
			</Head>
		<body className={font.className}>{children}</body>
		</html>
  );
}