
export default function Breadcrumb({Breadcrumbtitle}) {
  return (
   <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
  <a href="#" class="text-dark text-decoration-none">Home</a>
</li>
    <li class="breadcrumb-item active" aria-current="page">{Breadcrumbtitle}</li>
  </ol>
</nav>
  )
}

