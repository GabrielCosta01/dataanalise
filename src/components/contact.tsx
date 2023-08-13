import { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormValues {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
}

const Contact = () => {
  const [values, setValues] = useState<ContactFormValues>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
        setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
    }));
};  

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
        await axios.post("https://api-data-analise-biellokos2.vercel.app/enviar-email", values);
        toast.success("Email enviado com sucesso!");
        setValues({
            nome: "",
            email: "",
            telefone: "",
            mensagem: "",
        });
    } catch (error) {
        console.error(error);
        toast.error("Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.");
    }
  };
  
    return (
        <div id="contato" className="flex justify-center items-center h-screen">
            <ToastContainer />
            <div className="w-full max-w-md p-4 ">
                <h1 className="text-2xl font-bold mb-4">Formulário de Contato</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="nome" className="block ">
                        Nome:
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </label>

                    <label htmlFor="email" className="block">
                        Email:
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </label>

                    <label htmlFor="telefone" className="block">
                        Telefone:
                        <input
                        type="telefone"
                        id="telefone"
                        name="telefone"
                        value={values.telefone}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </label>

                    <label htmlFor="mensagem" className="block">
                        Mensagem:
                        <textarea
                        id="mensagem"
                        name="mensagem"
                        value={values.mensagem}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-2 w-full"
                        ></textarea>
                    </label>

                    <div className="w-full">
                        <button type="submit" className="bg-blue-500 border text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
                        Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact;