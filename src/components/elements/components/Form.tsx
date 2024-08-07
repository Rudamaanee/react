import Form from 'react-bootstrap/Form';
import FormFloating from './FormFloating'

const BootForm = () => {
  let  value='';
  
  return (
    <>
      <h2>input</h2>
      <Form className='mt-3'>
        <Form.Group className="mb-3" controlId="formBasicText1">
          <Form.Label>Text</Form.Label>
          <Form.Control type="text" size="sm" placeholder="text sm" defaultValue={value} />
        </Form.Group>
          <br />
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Control type="text" placeholder="text"  defaultValue={value}/>
        </Form.Group>
          <br />
        <Form.Group className="mb-3" controlId="formBasicText3">
          <Form.Control type="text" size="lg" placeholder="text lg" defaultValue={value} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" defaultValue={value} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Number" defaultValue={value} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue={'email@bok.or.kr'} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicTel">
          <Form.Label>Tel</Form.Label>
          <Form.Control type="tel" placeholder="Tel" defaultValue={'010-1234-56789'} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Url</Form.Label>
          <Form.Control type="url" placeholder="Url" defaultValue={'https://www.bok.or.kr/portal/main/main.do'} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInputDisabled">Disabled input</Form.Label>
          <Form.Control id="disabledTextInputDisabled" placeholder="Disabled input" disabled defaultValue={value} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInputReadOnly">ReadOnly input</Form.Label>
          <Form.Control id="disabledTextInputReadOnly" placeholder="ReadOnly input" readOnly defaultValue={value} />
        </Form.Group>
      </Form>

      <h2 className='mt-5'>FloatingLabel</h2>
        <FormFloating />

      <h2 className='mt-5'>checkbox</h2>
      <Form className='mt-3'>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Check
              inline
              type="checkbox"
              id="setCheck1"
              label="checkbox"
            />
            <Form.Check
              inline
              type="checkbox"
              id="setCheck2"
              label="checkbox"
              defaultChecked
            />
          </Form.Group>
        </fieldset>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Check
              inline
              type="checkbox"
              id="disabledSetCheck1"
              label="checkbox disabled"
            />
            <Form.Check
              inline
              type="checkbox"
              id="disabledSetCheck2"
              label="checkbox disabled"
              defaultChecked
            />
          </Form.Group>
        </fieldset>
      </Form>

      <h2 className='mt-5'>radio</h2>
      <Form className='mt-3'>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Check
              inline
              type="radio"
              id="radio1"
              label="radio"
            />
            <Form.Check
              inline
              type="radio"
              id="radio2"
              label="radio"
              defaultChecked
            />
          </Form.Group>
        </fieldset>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Check
              inline
              type="radio"
              id="disabledRadio1"
              label="radio disabled"
            />
            <Form.Check
              inline
              type="radio"
              id="disabledRadio2"
              label="radio disabled"
              defaultChecked
            />
          </Form.Group>
        </fieldset>
      </Form>

      <h2 className='mt-5'>textarea</h2>
      <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <h2 className='mt-5'>select</h2>
      <Form className='mt-3'>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">select menu</Form.Label>
            <Form.Select id="select1" size="sm">
              <option>Small select</option>
            </Form.Select>
            <br />
            <Form.Select id="select2">
              <option>select</option>
            </Form.Select>
            <br />
            <Form.Select id="select3" size="lg">
              <option>Large select</option>
            </Form.Select>
          </Form.Group>
        </fieldset>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
            <Form.Select id="disabledSelect" disabled>
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
        </fieldset>
      </Form>

      <h2>File</h2>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Disabled file input example</Form.Label>
        <Form.Control type="file" disabled />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
    </>
  );
}
export default BootForm;