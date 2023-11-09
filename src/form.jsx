export function Form({ stateValues }) {
    return (
        <div className='form-text'>
        <h1>Form</h1>
        <p>
            Hello, my name is <b>{stateValues['Name'] ? stateValues['Name'] : '_________'}</b>, 
            my email address is <b>{stateValues['Email'] ? stateValues['Email'] : '_________'}</b>,
            and my phone number is <b>{stateValues['Phone Number'] ? stateValues['Phone Number'] : '_________'}</b>.
            I studied <b>{stateValues['Field of Study'] ? stateValues['Field of Study'] : '_________'}</b> at <b>{stateValues['School Name'] ? stateValues['School Name'] : '_________'}</b> in <b>{stateValues['Date Attended'] ? stateValues['Date Attended'] : '_________'}</b>.
            I currently work at <b>{stateValues['Company Name'] ? stateValues['Company Name'] : '_________'}</b> as a <b>{stateValues['Position in Organization'] ? stateValues['Position in Organization'] : '_________'}</b>. 
            I handle <b>{stateValues['Responsibilities'] ? stateValues['Responsibilities'] : '_________'}</b>.
        </p>
    </div>
    );
}
