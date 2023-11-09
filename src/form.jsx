export function Form({ stateValues }) {
    const placeholders = {
        'Name': 'Name',
        'Email': 'Email',
        'Phone Number': 'Phone Number',
        'Field of Study': 'Field of Study',
        'School Name': 'School Name',
        'Date Attended': 'Date Attended',
        'Company Name': 'Company Name',
        'Position in Organization': 'Position',
        'Responsibilities': 'Responsibilities',
      };
    
      const generateFieldContent = (fieldName) => (
        stateValues[fieldName] || '_________'
      );

    return (
        <div className='form-text'>
        <h1>Form</h1>
        <p>
            Hello, my name is <b>{generateFieldContent('Name')}</b>, 
            my email address is <b>{generateFieldContent('Email')}</b>,
            and my phone number is <b>{generateFieldContent('Phone Number')}</b>.
            I studied <b>{generateFieldContent('Field of Study')}</b> at <b>{generateFieldContent('School Name')}</b> in <b>{generateFieldContent('Date Attended')}</b>.
            I currently work at <b>{generateFieldContent('Company Name')}</b> as a <b>{generateFieldContent('Position in Organization')}</b>. 
            I handle <b>{generateFieldContent('Responsibilities')}</b>.
        </p>
    </div>
    );
}
