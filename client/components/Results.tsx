export default function Results({ items }: any) {
  return (
    <div style={{ marginTop: 30 }}>
      {items.map((item: any, index: number) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <a href={item.link} target="_blank">
            View Product
          </a>
        </div>
      ))}
    </div>
  );
}
