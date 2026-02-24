import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const { slug } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Детали товара</h1>
      <p>Slug товара: {slug}</p>
    </div>
  );
}