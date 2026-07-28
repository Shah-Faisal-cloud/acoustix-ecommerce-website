export default function Button({
  color,
  isOutline,
  url,
  label = "See Product",
  styles = "",
  isDisabled = false,
}) {
  const fillClass = isOutline ? "button--outline" : "button--solid";
  const colorClass = `button--${color}`;
  const disabledClass = isDisabled ? "button--disabled" : "";

  return /* html */ `
    <a
    href="${url}" 
    style="${styles} ${isDisabled ? " opacity: 0.5; cursor: not-allowed" : ""}" 
    class="button ${colorClass} ${fillClass} ${disabledClass}" 
    ${isDisabled ? 'aria-disabled="true"' : ''}
    >
      ${label}
    </a>
  `;
}
