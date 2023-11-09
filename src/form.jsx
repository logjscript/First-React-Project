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
    
    const placeholderContent = (fieldName) => (
    stateValues[fieldName] || '_________'
    );

    return (
        <div className='form-text'>
        <h1>Form</h1>
        <p>
            Hello, my name is <b>{placeholderContent('Name')}</b>, 
            my email address is <b>{placeholderContent('Email')}</b>,
            and my phone number is <b>{placeholderContent('Phone Number')}</b>.
            I studied <b>{placeholderContent('Field of Study')}</b> at <b>{placeholderContent('School Name')}</b> in <b>{placeholderContent('Date Attended')}</b>.
            I currently work at <b>{placeholderContent('Company Name')}</b> as a <b>{placeholderContent('Position in Organization')}</b>. 
            I handle <b>{placeholderContent('Responsibilities')}</b>.
        </p>
    </div>
    );
}
