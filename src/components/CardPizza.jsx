import { clp } from '../utils/format'

export default function CardPizza({name, price, ingredients = [], img}) {
  return (
    <>
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <div className="mb-2">
          <p>Ingredientes:</p>
          <p className="mb-0">{ingredients.join(', ')}</p>
        </div>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-5">${clp(price)}</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Ver más</button>
            <button className="btn btn-primary">Añadir</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
