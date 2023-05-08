import AccordionItem from "./AccordionItem";

export default function AccordionMenu({ fields }) {
  return (
    <div className="accordion w-100" >
      {fields.map((field) => (
        <AccordionItem field={field} key={field.name} />
      ))}
    </div>
  );
}
