export function Stats({ items }) {
  const numOfItems = items.length;
  if (numOfItems === 0)
    return (
      <p className="stats">
        <em>Star Packing Your Bag</em>
      </p>
    );
  const packedItems = items.filter((item) => item.packed).length;
  const parcent =
    numOfItems === 0 ? 0 : Math.round((packedItems / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {parcent === 100
          ? "You are good to go"
          : `You Have ${numOfItems} item on Your list , and You alr packed
        ${packedItems} (${parcent}%)`}
      </em>
    </footer>
  );
}
