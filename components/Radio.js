export default function Radio({ name, value, id, label, change }) {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="relative h-[20px]">
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={change}
          className="radio"
        />
        <div className="radio__inner"></div>
      </div>
      <label htmlFor={id} className={`radio__label cursor-pointer`}>
        {label}
      </label>
    </div>
  );
}
