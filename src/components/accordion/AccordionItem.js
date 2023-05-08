import AccordionMenu from "./AccordionMenu";

export default function AccordionItem({ field }) {
  const fieldName = field.name.replace(" ", "-");
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${fieldName}`}
        >
          {field.name}
        </button>
      </h2>
      <div
        id={fieldName}
        className="accordion-collapse collapse"
        data-bs-parent="#mainAcc"
      >
        <div className="accordion-body">
          {field.children.length !== 0 ? (
            <AccordionMenu fields={field.children} />
          ) : (
            <a href={field.link}>{field.name}</a>
          )}
        </div>
      </div>
    </div>
  );
}
