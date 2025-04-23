import { useState } from "react";
import axios from "axios";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    productType: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      // 1. Upload da imagem
      const imageForm = new FormData();
      imageForm.append("file", form.image);

      const uploadRes = await axios.post("http://localhost:8090/products/upload", imageForm, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = uploadRes.data;

      // 2. Cadastro do produto
      const product = {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        productType: form.productType,
        imageUrl,
      };

      await axios.post("http://localhost:8090/products", product);
      alert("Produto cadastrado com sucesso!");

      // Limpar formulário
      setForm({ name: "", description: "", price: "", productType: "", image: null });
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar produto.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-white space-y-4">
      <h2 className="text-xl font-semibold">Cadastrar Produto</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome do Produto"
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descrição"
        className="w-full border p-2 rounded"
      />

      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        type="number"
        step="0.01"
        placeholder="Preço"
        className="w-full border p-2 rounded"
        required
      />

      <select
        name="productType"
        value={form.productType}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Selecione o tipo</option>
        <option value="FOOD_TYPE">Espeto</option>
        <option value="DRINK_TYPE">Bebida</option>
        <option value="BEER_TYPE">Cervejas</option>
        <option value="ACCOMPANIMENT_TYPE">Acompanhamento</option>
      </select>

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
        required
      />

      {preview && <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded" />}

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        disabled={uploading}
      >
        {uploading ? "Enviando..." : "Cadastrar Produto"}
      </button>
    </form>
  );
}
