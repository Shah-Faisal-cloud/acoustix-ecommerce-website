export default function button({
  color,
  isOutline,
  url,
  label = "See Product",
}) {
  const fillClass = isOutline ? "button--outline" : "button--solid";
  const colorClass = `button--${color}`;

  return /* html */ `
    <a href="${url}" class="button ${colorClass} ${fillClass}">
      ${label}
    </a>
  `;
}
