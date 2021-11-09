import { useEffect, useState } from 'react'

const FormPostEdit = ({ selected }) => {
  // const { posts } = useContext(UserContext)
  const [form, setForm] = useState({ ...selected })

  useEffect(() => {
    setForm({
      ...selected,
    })
  }, [selected])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleOnSave = () => {
    return null
  }

  return (
    <div class='modal fade' id='formPostEdit' tabindex='-1' aria-hidden='true'>
      <div class='modal-dialog modal-dialog-centered modal-xl'>
        <div class='modal-content p-3'>
          <h5 class='modal-title'>Ver tu publicación</h5>
          <div class='modal-body'>
            <form>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='title'>Titulo</label>
                  <input
                    type='text'
                    name='title'
                    id='inputTitle'
                    className='form-control'
                    onChange={onChange}
                    value={form.title}
                    disabled
                  />
                </div>
                <div className='col'>
                  <label htmlFor='direction'>Direccion</label>
                  <input
                    type='text'
                    name='direction'
                    id='inputDirection'
                    className='form-control'
                    value={form.direction}
                    onChange={onChange}
                    disabled
                  />
                </div>
                <div className='col'>
                  <label htmlFor='businessHours'>Horario de atención</label>
                  <input
                    type='text'
                    name='businessHours'
                    id='inputHours'
                    className='form-control'
                    value={form.businessHours}
                    onChange={onChange}
                    disabled
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='primaryTelephone'>Telefono</label>
                  <input
                    type='tel'
                    name='primaryTelephone'
                    id='inputTelephone'
                    className='form-control'
                    value={form.primaryTelephone}
                    onChange={onChange}
                    disabled
                  />
                </div>
                <div className='col'>
                  <label htmlFor='secondaryTelephone'>Telefono secundario</label>
                  <input
                    type='text'
                    name='secondaryTelephone'
                    id='inputTelephone2'
                    className='form-control'
                    value={form.secondaryTelephone}
                    onChange={onChange}
                    disabled
                  />
                </div>
                <div className='col'>
                  <label htmlFor='type'>Seleccione tipo de servicio</label>
                  <select
                    name='type'
                    id='selectType'
                    className='form-select'
                    value={form.type}
                    onChange={onChange}
                    disabled
                  >
                    <option defaultValue hidden>
                      Tienda de
                    </option>
                    <option value='Moda'>Moda</option>
                    <option value='Tecnologia'>Tecnologia</option>
                    <option value='Comida'>Comida</option>
                    <option value='Varios'>Varios</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='name'>Nombre Dueño</label>
                  <input
                    type='text'
                    name='name'
                    id='inputName'
                    className='form-control'
                    value={form.user.name}
                    disabled
                  />
                </div>
                <div className='col'>
                  <label htmlFor='email'>Email Dueño</label>
                  <input
                    type='email'
                    name='email'
                    id='inputEmail'
                    className='form-control'
                    value={form.user.email}
                    disabled
                  />
                </div>
                <div className='col'>
                  <label htmlFor='secondaryEmail'>Email Secundario</label>
                  <input
                    type='email'
                    name='secondaryEmail'
                    id='inputEmail2'
                    className='form-control'
                    value={form.secondaryEmail}
                    onChange={onChange}
                    disabled
                  />
                </div>
              </div>
              <div className='row'>
                <label htmlFor='description'>Descripción</label>
                <textarea
                  type='text'
                  name='description'
                  id='areaDescription'
                  className='form-control'
                  value={form.description}
                  onChange={onChange}
                  disabled
                />
              </div>
            </form>
          </div>
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={handleOnSave}
              hidden
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPostEdit
