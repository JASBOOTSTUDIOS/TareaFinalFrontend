import { textColorPrimary } from "../themesAndColors/TemesAndColors";




export default function FormTableCredentials(){
return (<>

    <div className="row mb-3">
        <div className="col-sm-5 m-1">
            <label htmlFor="userName" className={`${textColorPrimary}`}>User Name</label>
            <input className={`bg-dark form-control ${textColorPrimary}`} placeholder="Usuario" type="text" name="" />
        </div>
        <div className="col-sm-5 m-1">
            <input className={`bg-dark form-control ${textColorPrimary}`} placeholder="Usuario" type="text" name="" />
        </div>
        <div className="col-sm-5 m-1">
            <input className={`bg-dark form-control ${textColorPrimary}`} placeholder="Usuario" type="text" name="" />
        </div>
        <div className="col-sm-5 m-1">
                <input className={`bg-dark form-control ${textColorPrimary}`} placeholder="Usuario" type="text" name="" />
        </div>
    </div>
</>)
}