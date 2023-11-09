export function Form({ stateValues }) {
    return (
        <p>
            Hello, my name is <b>{stateValues['Name']}</b>, 
            my email address is <b>{stateValues['Email']}</b>,
            and my phone number is <b>{stateValues['Phone Number']}</b>.
            I studied <b>{stateValues['Field of Study']}</b> at <b>{stateValues['School Name']}</b> in <b>{stateValues['Date Attended']}</b>.
            I currently work at <b>{stateValues['Company Name']}</b> as a <b>{stateValues['Position in Organization']}</b>. 
            I handle <b>{stateValues['Responsibilities']}</b>.
        </p>
    );
}
