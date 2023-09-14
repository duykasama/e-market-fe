function AddNewModal({ fields }) {
  return (
    <div className="absolute">
      {fields.map((field, idx) => (
        <div key={idx}>something</div>
      ))}
    </div>
  );
}

export default AddNewModal;
