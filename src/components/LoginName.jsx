export const LoginName = (props) => {

    let auth = ''
    props.auth ? auth = '(Auth)' : auth = '(noAuth)'
    return (
        <div>


            login: {props.name} {auth}
        </div>
    )
}
