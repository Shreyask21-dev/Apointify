import React from 'react'

export default function Plans() {
    return (
        <>
            <div className="d-grid gap-3 gap-lg-5">

                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Plans</h4>
                    </div>


                    <div className="card-body">
                        <form>

                            <div className="row mb-4">
                                <label className="col-sm-3 col-form-label form-label">Profile photo</label>

                                <div className="col-sm-9">

                                    <div className="d-flex align-items-center">

                                        <label className="avatar avatar-xl avatar-circle" for="avatarUploader">
                                            <img id="avatarImg" className="avatar-img" src="/assets/img/160x160/img9.jpg" alt="Image Description" />
                                        </label>

                                        <div className="d-grid d-sm-flex gap-2 ms-4">
                                            <div className="form-attachment-btn btn btn-primary btn-sm">Upload photo
                                                <input type="file" className="js-file-attach form-attachment-btn-label" id="avatarUploader"
                                                    data-hs-file-attach-options='{
                            "textTarget": "#avatarImg",
                            "mode": "image",
                            "targetAttr": "src",
                            "resetTarget": ".js-file-attach-reset-img",
                            "resetImg": "/assets/img/160x160/img1.jpg",
                            "allowTypes": [".png", ".jpeg", ".jpg"]
                         }'/>
                                            </div>


                                            <button type="button" className="js-file-attach-reset-img btn btn-white btn-sm">Delete</button>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className="row mb-4">
                                <label for="firstNameLabel" className="col-sm-3 col-form-label form-label">Full name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front."></i></label>

                                <div className="col-sm-9">
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="firstName" id="firstNameLabel" placeholder="Clarice" aria-label="Clarice" value="Natalie" />
                                        <input type="text" className="form-control" name="lastName" id="lastNameLabel" placeholder="Boone" aria-label="Boone" value="Curtis" />
                                    </div>
                                </div>
                            </div>



                            <div className="row mb-4">
                                <label for="emailLabel" className="col-sm-3 col-form-label form-label">Email</label>

                                <div className="col-sm-9">
                                    <input type="email" className="form-control" name="email" id="emailLabel" placeholder="clarice@example.com" aria-label="clarice@example.com" value="natalie@example.com" />
                                </div>
                            </div>



                            <div className="js-add-field row mb-4"
                                data-hs-add-field-options='{
                "template": "#addPhoneFieldTemplate",
                "container": "#addPhoneFieldContainer",
                "defaultCreated": 0
              }'>
                                <label for="phoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>

                                <div className="col-sm-9">
                                    <div className="input-group">
                                        <input type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" value="+1(605)5618929"
                                            data-hs-mask-options='{
                       "mask": "+{0}(000)000-00-00"
                     }'/>


                                        <div className="tom-select-custom">
                                            <select className="js-select form-select" name="phoneSelect"
                                                data-hs-tom-select-options='{
                          "width": "8rem",
                          "hideSearch": true
                        }'>
                                                <option value="Mobile" selected>Mobile</option>
                                                <option value="Home">Home</option>
                                                <option value="Work">Work</option>
                                                <option value="Fax">Fax</option>
                                                <option value="Direct">Direct</option>
                                            </select>
                                        </div>

                                    </div>


                                    <div id="addPhoneFieldContainer"></div>

                                    <a href="javascript:;" className="js-create-field form-link">
                                        <i className="bi-plus-circle me-1"></i> Add phone
                                    </a>
                                </div>
                            </div>



                            <div id="addPhoneFieldTemplate" style={{ display: "none", position: "relative" }}>
                                <div className="input-group input-group-add-field">
                                    <input type="text" className="js-input-mask-dynamic form-control" data-name="additionlPhone" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx"
                                        data-hs-mask-options='{
                     "mask": "+{0}(000)000-00-00"
                   }'/>


                                    <div className="tom-select-custom">
                                        <select className="js-select-dynamic form-select" data-name="additionlPhoneSelect"
                                            data-hs-tom-select-options='{
                          "width": "8rem",
                          "hideSearch": true
                        }'>
                                            <option value="Mobile" selected>Mobile</option>
                                            <option value="Home">Home</option>
                                            <option value="Work">Work</option>
                                            <option value="Fax">Fax</option>
                                            <option value="Direct">Direct</option>
                                        </select>
                                    </div>

                                </div>

                                <a className="js-delete-field input-group-add-field-delete" href="javascript:;">
                                    <i className="bi-x-lg"></i>
                                </a>
                            </div>



                            <div className="row mb-4">
                                <label className="col-sm-3 col-form-label form-label">Gender</label>

                                <div className="col-sm-9">
                                    <div className="input-group input-group-md-down-break">

                                        <label className="form-control" for="genderTypeRadio1">
                                            <span className="form-check">
                                                <input type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio1" />
                                                <span className="form-check-label">Male</span>
                                            </span>
                                        </label>



                                        <label className="form-control" for="genderTypeRadio2">
                                            <span className="form-check">
                                                <input type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio2" checked />
                                                <span className="form-check-label">Female</span>
                                            </span>
                                        </label>



                                        <label className="form-control" for="genderTypeRadio3">
                                            <span className="form-check">
                                                <input type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio3" />
                                                <span className="form-check-label">Other</span>
                                            </span>
                                        </label>

                                    </div>
                                </div>
                            </div>



                            <div className="row mb-4">
                                <label className="col-sm-3 col-form-label form-label">BIO</label>

                                <div className="col-sm-9">

                                    <div className="quill-custom">
                                        <div className="js-quill" style={{ height: "15rem" }}
                                            data-hs-quill-options='{
                   "placeholder": "Type your message...",
                    "modules": {
                      "toolbar": [
                        ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
                      ]
                    }
                   }'>Creative mind at Htmlstream
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className="row align-items-center">
                                <label for="disableAdCheckbox" className="col-sm-3 col-form-label form-label">Disable ads <span className="badge badge-primary text-uppercase ms-1">PRO</span></label>

                                <div className="col-sm-9">

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="disableAdCheckbox" />
                                        <label className="form-check-label" for="disableAdCheckbox">With your Pro account, you can disable ads across the site.</label>
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>



                    <div className="card-footer pt-0">
                        <div className="d-flex justify-content-end gap-3">
                            <a className="btn btn-white" href="javascript:;">Cancel</a>
                            <a className="btn btn-primary" href="javascript:;">Save changes</a>
                        </div>
                    </div>

                </div>



                <div id="editAddressCard" className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Address</h4>
                    </div>


                    <div className="card-body">
                        <form>

                            <div className="row mb-4">
                                <label for="locationLabel" className="col-sm-3 col-form-label form-label">Location</label>

                                <div className="col-sm-9">

                                    <div className="tom-select-custom mb-3">
                                        <select className="js-select form-select" id="locationLabel">
                                            <option value="AF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/af.svg" alt="Afghanistan Flag" /><span className="text-truncate">Afghanistan</span></span>'>Afghanistan</option>
                                            <option value="AX" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ax.svg" alt="Aland Islands Flag" /><span className="text-truncate">Aland Islands</span></span>'>Aland Islands</option>
                                            <option value="AL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/al.svg" alt="Albania Flag" /><span className="text-truncate">Albania</span></span>'>Albania</option>
                                            <option value="DZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/dz.svg" alt="Algeria Flag" /><span className="text-truncate">Algeria</span></span>'>Algeria</option>
                                            <option value="AS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/as.svg" alt="American Samoa Flag" /><span className="text-truncate">American Samoa</span></span>'>American Samoa</option>
                                            <option value="AD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ad.svg" alt="Andorra Flag" /><span className="text-truncate">Andorra</span></span>'>Andorra</option>
                                            <option value="AO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ao.svg" alt="Angola Flag" /><span className="text-truncate">Angola</span></span>'>Angola</option>
                                            <option value="AI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ai.svg" alt="Anguilla Flag" /><span className="text-truncate">Anguilla</span></span>'>Anguilla</option>
                                            <option value="AG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ag.svg" alt="Antigua and Barbuda Flag" /><span className="text-truncate">Antigua and Barbuda</span></span>'>Antigua and Barbuda</option>
                                            <option value="AR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ar.svg" alt="Argentina Flag" /><span className="text-truncate">Argentina</span></span>'>Argentina</option>
                                            <option value="AM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/am.svg" alt="Armenia Flag" /><span className="text-truncate">Armenia</span></span>'>Armenia</option>
                                            <option value="AW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/aw.svg" alt="Aruba Flag" /><span className="text-truncate">Aruba</span></span>'>Aruba</option>
                                            <option value="AU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/au.svg" alt="Australia Flag" /><span className="text-truncate">Australia</span></span>'>Australia</option>
                                            <option value="AT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/at.svg" alt="Austria Flag" /><span className="text-truncate">Austria</span></span>'>Austria</option>
                                            <option value="AZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/az.svg" alt="Azerbaijan Flag" /><span className="text-truncate">Azerbaijan</span></span>'>Azerbaijan</option>
                                            <option value="BS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bs.svg" alt="Bahamas Flag" /><span className="text-truncate">Bahamas</span></span>'>Bahamas</option>
                                            <option value="BH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bh.svg" alt="Bahrain Flag" /><span className="text-truncate">Bahrain</span></span>'>Bahrain</option>
                                            <option value="BD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bd.svg" alt="Bangladesh Flag" /><span className="text-truncate">Bangladesh</span></span>'>Bangladesh</option>
                                            <option value="BB" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bb.svg" alt="Barbados Flag" /><span className="text-truncate">Barbados</span></span>'>Barbados</option>
                                            <option value="BY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/by.svg" alt="Belarus Flag" /><span className="text-truncate">Belarus</span></span>'>Belarus</option>
                                            <option value="BE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/be.svg" alt="Belgium Flag" /><span className="text-truncate">Belgium</span></span>'>Belgium</option>
                                            <option value="BZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bz.svg" alt="Belize Flag" /><span className="text-truncate">Belize</span></span>'>Belize</option>
                                            <option value="BJ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bj.svg" alt="Benin Flag" /><span className="text-truncate">Benin</span></span>'>Benin</option>
                                            <option value="BM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bm.svg" alt="Bermuda Flag" /><span className="text-truncate">Bermuda</span></span>'>Bermuda</option>
                                            <option value="BT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bt.svg" alt="Bhutan Flag" /><span className="text-truncate">Bhutan</span></span>'>Bhutan</option>
                                            <option value="BO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bo.svg" alt="Bolivia (Plurinational State of) Flag" /><span className="text-truncate">Bolivia (Plurinational State of)</span></span>'>Bolivia (Plurinational State of)</option>
                                            <option value="BQ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bq.svg" alt="Bonaire, Sint Eustatius and Saba Flag" /><span className="text-truncate">Bonaire, Sint Eustatius and Saba</span></span>'>Bonaire, Sint Eustatius and Saba</option>
                                            <option value="BA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ba.svg" alt="Bosnia and Herzegovina Flag" /><span className="text-truncate">Bosnia and Herzegovina</span></span>'>Bosnia and Herzegovina</option>
                                            <option value="BW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bw.svg" alt="Botswana Flag" /><span className="text-truncate">Botswana</span></span>'>Botswana</option>
                                            <option value="BR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/br.svg" alt="Brazil Flag" /><span className="text-truncate">Brazil</span></span>'>Brazil</option>
                                            <option value="IO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/io.svg" alt="British Indian Ocean Territory Flag" /><span className="text-truncate">British Indian Ocean Territory</span></span>'>British Indian Ocean Territory</option>
                                            <option value="BN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bn.svg" alt="Brunei Darussalam Flag" /><span className="text-truncate">Brunei Darussalam</span></span>'>Brunei Darussalam</option>
                                            <option value="BG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bg.svg" alt="Bulgaria Flag" /><span className="text-truncate">Bulgaria</span></span>'>Bulgaria</option>
                                            <option value="BF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bf.svg" alt="Burkina Faso Flag" /><span className="text-truncate">Burkina Faso</span></span>'>Burkina Faso</option>
                                            <option value="BI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bi.svg" alt="Burundi Flag" /><span className="text-truncate">Burundi</span></span>'>Burundi</option>
                                            <option value="CV" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cv.svg" alt="Cabo Verde Flag" /><span className="text-truncate">Cabo Verde</span></span>'>Cabo Verde</option>
                                            <option value="KH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kh.svg" alt="Cambodia Flag" /><span className="text-truncate">Cambodia</span></span>'>Cambodia</option>
                                            <option value="CM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cm.svg" alt="Cameroon Flag" /><span className="text-truncate">Cameroon</span></span>'>Cameroon</option>
                                            <option value="CA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ca.svg" alt="Canada Flag" /><span className="text-truncate">Canada</span></span>'>Canada</option>
                                            <option value="KY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ky.svg" alt="Cayman Islands Flag" /><span className="text-truncate">Cayman Islands</span></span>'>Cayman Islands</option>
                                            <option value="CF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle shape-3.svg2" src="/assets/vendor/flag-icon-css/flags/1x1/cf.svg" alt="Central African Republic Flag" /><span className="text-truncate">Central African Republic</span></span>'>Central African Republic</option>
                                            <option value="TD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/td.svg" alt="Chad Flag" /><span className="text-truncate">Chad</span></span>'>Chad</option>
                                            <option value="CL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cl.svg" alt="Chile Flag" /><span className="text-truncate">Chile</span></span>'>Chile</option>
                                            <option value="CN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="China Flag" /><span className="text-truncate">China</span></span>'>China</option>
                                            <option value="CX" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cx.svg" alt="Christmas Island Flag" /><span className="text-truncate">Christmas Island</span></span>'>Christmas Island</option>
                                            <option value="CC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cc.svg" alt="Cocos (Keeling) Islands Flag" /><span className="text-truncate">Cocos (Keeling) Islands</span></span>'>Cocos (Keeling) Islands</option>
                                            <option value="CO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/co.svg" alt="Colombia Flag" /><span className="text-truncate">Colombia</span></span>'>Colombia</option>
                                            <option value="KM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/km.svg" alt="Comoros Flag" /><span className="text-truncate">Comoros</span></span>'>Comoros</option>
                                            <option value="CK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ck.svg" alt="Cook Islands Flag" /><span className="text-truncate">Cook Islands</span></span>'>Cook Islands</option>
                                            <option value="CR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cr.svg" alt="Costa Rica Flag" /><span className="text-truncate">Costa Rica</span></span>'>Costa Rica</option>
                                            <option value="HR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/hr.svg" alt="Croatia Flag" /><span className="text-truncate">Croatia</span></span>'>Croatia</option>
                                            <option value="CU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cu.svg" alt="Cuba Flag" /><span className="text-truncate">Cuba</span></span>'>Cuba</option>
                                            <option value="CW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cw.svg" alt="Curaçao Flag" /><span className="text-truncate">Curaçao</span></span>'>Curaçao</option>
                                            <option value="CY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cy.svg" alt="Cyprus Flag" /><span className="text-truncate">Cyprus</span></span>'>Cyprus</option>
                                            <option value="CZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cz.svg" alt="Czech Republic Flag" /><span className="text-truncate">Czech Republic</span></span>'>Czech Republic</option>
                                            <option value="CI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ci.svg" alt=Côte d&apos;Ivoire Flag" /><span className="text-truncate">Côte d&apos;Ivoire</span></span>'>Côte d'Ivoire</option>
                                            <option value="CD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cd.svg" alt="Democratic Republic of the Congo Flag" /><span className="text-truncate">Democratic Republic of the Congo</span></span>'>Democratic Republic of the Congo</option>
                                            <option value="DK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Denmark Flag" /><span className="text-truncate">Denmark</span></span>'>Denmark</option>
                                            <option value="DJ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/dj.svg" alt="Djibouti Flag" /><span className="text-truncate">Djibouti</span></span>'>Djibouti</option>
                                            <option value="DM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/dm.svg" alt="Dominica Flag" /><span className="text-truncate">Dominica</span></span>'>Dominica</option>
                                            <option value="DO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/do.svg" alt="Dominican Republic Flag" /><span className="text-truncate">Dominican Republic</span></span>'>Dominican Republic</option>
                                            <option value="EC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ec.svg" alt="Ecuador Flag" /><span className="text-truncate">Ecuador</span></span>'>Ecuador</option>
                                            <option value="EG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/eg.svg" alt="Egypt Flag" /><span className="text-truncate">Egypt</span></span>'>Egypt</option>
                                            <option value="SV" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sv.svg" alt="El Salvador Flag" /><span className="text-truncate">El Salvador</span></span>'>El Salvador</option>
                                            <option value="GB-ENG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gb-eng.svg" alt="England Flag" /><span className="text-truncate">England</span></span>'>England</option>
                                            <option value="GQ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gq.svg" alt="Equatorial Guinea Flag" /><span className="text-truncate">Equatorial Guinea</span></span>'>Equatorial Guinea</option>
                                            <option value="ER" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/er.svg" alt="Eritrea Flag" /><span className="text-truncate">Eritrea</span></span>'>Eritrea</option>
                                            <option value="EE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ee.svg" alt="Estonia Flag" /><span className="text-truncate">Estonia</span></span>'>Estonia</option>
                                            <option value="ET" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/et.svg" alt="Ethiopia Flag" /><span className="text-truncate">Ethiopia</span></span>'>Ethiopia</option>
                                            <option value="FK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/fk.svg" alt="Falkland Islands Flag" /><span className="text-truncate">Falkland Islands</span></span>'>Falkland Islands</option>
                                            <option value="FO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/fo.svg" alt="Faroe Islands Flag" /><span className="text-truncate">Faroe Islands</span></span>'>Faroe Islands</option>
                                            <option value="FM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/fm.svg" alt="Federated States of Micronesia Flag" /><span className="text-truncate">Federated States of Micronesia</span></span>'>Federated States of Micronesia</option>
                                            <option value="FJ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/fj.svg" alt="Fiji Flag" /><span className="text-truncate">Fiji</span></span>'>Fiji</option>
                                            <option value="FI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/fi.svg" alt="Finland Flag" /><span className="text-truncate">Finland</span></span>'>Finland</option>
                                            <option value="FR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/fr.svg" alt="France Flag" /><span className="text-truncate">France</span></span>'>France</option>
                                            <option value="GF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gf.svg" alt="French Guiana Flag" /><span className="text-truncate">French Guiana</span></span>'>French Guiana</option>
                                            <option value="PF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pf.svg" alt="French Polynesia Flag" /><span className="text-truncate">French Polynesia</span></span>'>French Polynesia</option>
                                            <option value="TF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tf.svg" alt="French Southern Territories Flag" /><span className="text-truncate">French Southern Territories</span></span>'>French Southern Territories</option>
                                            <option value="GA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ga.svg" alt="Gabon Flag" /><span className="text-truncate">Gabon</span></span>'>Gabon</option>
                                            <option value="GM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gm.svg" alt="Gambia Flag" /><span className="text-truncate">Gambia</span></span>'>Gambia</option>
                                            <option value="GE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ge.svg" alt="Georgia Flag" /><span className="text-truncate">Georgia</span></span>'>Georgia</option>
                                            <option value="DE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Germany Flag" /><span className="text-truncate">Germany</span></span>'>Germany</option>
                                            <option value="GH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gh.svg" alt="Ghana Flag" /><span className="text-truncate">Ghana</span></span>'>Ghana</option>
                                            <option value="GI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gi.svg" alt="Gibraltar Flag" /><span className="text-truncate">Gibraltar</span></span>'>Gibraltar</option>
                                            <option value="GR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gr.svg" alt="Greece Flag" /><span className="text-truncate">Greece</span></span>'>Greece</option>
                                            <option value="GL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gl.svg" alt="Greenland Flag" /><span className="text-truncate">Greenland</span></span>'>Greenland</option>
                                            <option value="GD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gd.svg" alt="Grenada Flag" /><span className="text-truncate">Grenada</span></span>'>Grenada</option>
                                            <option value="GP" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gp.svg" alt="Guadeloupe Flag" /><span className="text-truncate">Guadeloupe</span></span>'>Guadeloupe</option>
                                            <option value="GU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gu.svg" alt="Guam Flag" /><span className="text-truncate">Guam</span></span>'>Guam</option>
                                            <option value="GT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gt.svg" alt="Guatemala Flag" /><span className="text-truncate">Guatemala</span></span>'>Guatemala</option>
                                            <option value="GG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gg.svg" alt="Guernsey Flag" /><span className="text-truncate">Guernsey</span></span>'>Guernsey</option>
                                            <option value="GN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gn.svg" alt="Guinea Flag" /><span className="text-truncate">Guinea</span></span>'>Guinea</option>
                                            <option value="GW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gw.svg" alt="Guinea-Bissau Flag" /><span className="text-truncate">Guinea-Bissau</span></span>'>Guinea-Bissau</option>
                                            <option value="GY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gy.svg" alt="Guyana Flag" /><span className="text-truncate">Guyana</span></span>'>Guyana</option>
                                            <option value="HT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ht.svg" alt="Haiti Flag" /><span className="text-truncate">Haiti</span></span>'>Haiti</option>
                                            <option value="VA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/va.svg" alt="Holy See Flag" /><span className="text-truncate">Holy See</span></span>'>Holy See</option>
                                            <option value="HN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/hn.svg" alt="Honduras Flag" /><span className="text-truncate">Honduras</span></span>'>Honduras</option>
                                            <option value="HK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/hk.svg" alt="Hong Kong Flag" /><span className="text-truncate">Hong Kong</span></span>'>Hong Kong</option>
                                            <option value="HU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/hu.svg" alt="Hungary Flag" /><span className="text-truncate">Hungary</span></span>'>Hungary</option>
                                            <option value="IS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/is.svg" alt="Iceland Flag" /><span className="text-truncate">Iceland</span></span>'>Iceland</option>
                                            <option value="IN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/in.svg" alt="India Flag" /><span className="text-truncate">India</span></span>'>India</option>
                                            <option value="ID" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/id.svg" alt="Indonesia Flag" /><span className="text-truncate">Indonesia</span></span>'>Indonesia</option>
                                            <option value="IR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ir.svg" alt="Iran (Islamic Republic of) Flag" /><span className="text-truncate">Iran (Islamic Republic of)</span></span>'>Iran (Islamic Republic of)</option>
                                            <option value="IQ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/iq.svg" alt="Iraq Flag" /><span className="text-truncate">Iraq</span></span>'>Iraq</option>
                                            <option value="IE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ie.svg" alt="Ireland Flag" /><span className="text-truncate">Ireland</span></span>'>Ireland</option>
                                            <option value="IM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/im.svg" alt="Isle of Man Flag" /><span className="text-truncate">Isle of Man</span></span>'>Isle of Man</option>
                                            <option value="IL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/il.svg" alt="Israel Flag" /><span className="text-truncate">Israel</span></span>'>Israel</option>
                                            <option value="IT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Italy Flag" /><span className="text-truncate">Italy</span></span>'>Italy</option>
                                            <option value="JM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/jm.svg" alt="Jamaica Flag" /><span className="text-truncate">Jamaica</span></span>'>Jamaica</option>
                                            <option value="JP" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/jp.svg" alt="Japan Flag" /><span className="text-truncate">Japan</span></span>'>Japan</option>
                                            <option value="JE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/je.svg" alt="Jersey Flag" /><span className="text-truncate">Jersey</span></span>'>Jersey</option>
                                            <option value="JO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/jo.svg" alt="Jordan Flag" /><span className="text-truncate">Jordan</span></span>'>Jordan</option>
                                            <option value="KZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kz.svg" alt="Kazakhstan Flag" /><span className="text-truncate">Kazakhstan</span></span>'>Kazakhstan</option>
                                            <option value="KE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ke.svg" alt="Kenya Flag" /><span className="text-truncate">Kenya</span></span>'>Kenya</option>
                                            <option value="KI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ki.svg" alt="Kiribati Flag" /><span className="text-truncate">Kiribati</span></span>'>Kiribati</option>
                                            <option value="KW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kw.svg" alt="Kuwait Flag" /><span className="text-truncate">Kuwait</span></span>'>Kuwait</option>
                                            <option value="KG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kg.svg" alt="Kyrgyzstan Flag" /><span className="text-truncate">Kyrgyzstan</span></span>'>Kyrgyzstan</option>
                                            <option value="LA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/la.svg" alt="Laos Flag" /><span className="text-truncate">Laos</span></span>'>Laos</option>
                                            <option value="LV" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lv.svg" alt="Latvia Flag" /><span className="text-truncate">Latvia</span></span>'>Latvia</option>
                                            <option value="LB" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lb.svg" alt="Lebanon Flag" /><span className="text-truncate">Lebanon</span></span>'>Lebanon</option>
                                            <option value="LS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ls.svg" alt="Lesotho Flag" /><span className="text-truncate">Lesotho</span></span>'>Lesotho</option>
                                            <option value="LR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lr.svg" alt="Liberia Flag" /><span className="text-truncate">Liberia</span></span>'>Liberia</option>
                                            <option value="LY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ly.svg" alt="Libya Flag" /><span className="text-truncate">Libya</span></span>'>Libya</option>
                                            <option value="LI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/li.svg" alt="Liechtenstein Flag" /><span className="text-truncate">Liechtenstein</span></span>'>Liechtenstein</option>
                                            <option value="LT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lt.svg" alt="Lithuania Flag" /><span className="text-truncate">Lithuania</span></span>'>Lithuania</option>
                                            <option value="LU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lu.svg" alt="Luxembourg Flag" /><span className="text-truncate">Luxembourg</span></span>'>Luxembourg</option>
                                            <option value="MO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mo.svg" alt="Macau Flag" /><span className="text-truncate">Macau</span></span>'>Macau</option>
                                            <option value="MG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mg.svg" alt="Madagascar Flag" /><span className="text-truncate">Madagascar</span></span>'>Madagascar</option>
                                            <option value="MW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mw.svg" alt="Malawi Flag" /><span className="text-truncate">Malawi</span></span>'>Malawi</option>
                                            <option value="MY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/my.svg" alt="Malaysia Flag" /><span className="text-truncate">Malaysia</span></span>'>Malaysia</option>
                                            <option value="MV" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mv.svg" alt="Maldives Flag" /><span className="text-truncate">Maldives</span></span>'>Maldives</option>
                                            <option value="ML" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ml.svg" alt="Mali Flag" /><span className="text-truncate">Mali</span></span>'>Mali</option>
                                            <option value="MT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mt.svg" alt="Malta Flag" /><span className="text-truncate">Malta</span></span>'>Malta</option>
                                            <option value="MH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mh.svg" alt="Marshall Islands Flag" /><span className="text-truncate">Marshall Islands</span></span>'>Marshall Islands</option>
                                            <option value="MQ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mq.svg" alt="Martinique Flag" /><span className="text-truncate">Martinique</span></span>'>Martinique</option>
                                            <option value="MR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mr.svg" alt="Mauritania Flag" /><span className="text-truncate">Mauritania</span></span>'>Mauritania</option>
                                            <option value="MU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mu.svg" alt="Mauritius Flag" /><span className="text-truncate">Mauritius</span></span>'>Mauritius</option>
                                            <option value="YT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/yt.svg" alt="Mayotte Flag" /><span className="text-truncate">Mayotte</span></span>'>Mayotte</option>
                                            <option value="MX" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mx.svg" alt="Mexico Flag" /><span className="text-truncate">Mexico</span></span>'>Mexico</option>
                                            <option value="MD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/md.svg" alt="Moldova Flag" /><span className="text-truncate">Moldova</span></span>'>Moldova</option>
                                            <option value="MC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mc.svg" alt="Monaco Flag" /><span className="text-truncate">Monaco</span></span>'>Monaco</option>
                                            <option value="MN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mn.svg" alt="Mongolia Flag" /><span className="text-truncate">Mongolia</span></span>'>Mongolia</option>
                                            <option value="ME" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/me.svg" alt="Montenegro Flag" /><span className="text-truncate">Montenegro</span></span>'>Montenegro</option>
                                            <option value="MS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ms.svg" alt="Montserrat Flag" /><span className="text-truncate">Montserrat</span></span>'>Montserrat</option>
                                            <option value="MA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ma.svg" alt="Morocco Flag" /><span className="text-truncate">Morocco</span></span>'>Morocco</option>
                                            <option value="MZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mz.svg" alt="Mozambique Flag" /><span className="text-truncate">Mozambique</span></span>'>Mozambique</option>
                                            <option value="MM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mm.svg" alt="Myanmar Flag" /><span className="text-truncate">Myanmar</span></span>'>Myanmar</option>
                                            <option value="NA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/na.svg" alt="Namibia Flag" /><span className="text-truncate">Namibia</span></span>'>Namibia</option>
                                            <option value="NR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/nr.svg" alt="Nauru Flag" /><span className="text-truncate">Nauru</span></span>'>Nauru</option>
                                            <option value="NP" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/np.svg" alt="Nepal Flag" /><span className="text-truncate">Nepal</span></span>'>Nepal</option>
                                            <option value="NL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/nl.svg" alt="Netherlands Flag" /><span className="text-truncate">Netherlands</span></span>'>Netherlands</option>
                                            <option value="NC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/nc.svg" "alt="New Caledonia Flag" /><span className="text-truncate">New Caledonia</span></span>'>New Caledonia</option>
                                            <option value="NZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/nz.svg" alt="New Zealand Flag" /><span className="text-truncate">New Zealand</span></span>'>New Zealand</option>
                                            <option value="NI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ni.svg" alt="Nicaragua Flag" /><span className="text-truncate">Nicaragua</span></span>'>Nicaragua</option>
                                            <option value="NE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ne.svg" alt="Niger Flag" /><span className="text-truncate">Niger</span></span>'>Niger</option>
                                            <option value="NG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ng.svg" alt="Nigeria Flag" /><span className="text-truncate">Nigeria</span></span>'>Nigeria</option>
                                            <option value="NU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/nu.svg" alt="Niue Flag" /><span className="text-truncate">Niue</span></span>'>Niue</option>
                                            <option value="NF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/nf.svg" alt="Norfolk Island Flag" /><span className="text-truncate">Norfolk Island</span></span>'>Norfolk Island</option>
                                            <option value="KP" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kp.svg" alt="North Korea Flag" /><span className="text-truncate">North Korea</span></span>'>North Korea</option>
                                            <option value="MK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mk.svg" alt="North Macedonia Flag" /><span className="text-truncate">North Macedonia</span></span>'>North Macedonia</option>
                                            <option value="GB-NIR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gb-nir.svg" alt="Northern Ireland Flag" /><span className="text-truncate">Northern Ireland</span></span>'>Northern Ireland</option>
                                            <option value="MP" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mp.svg" alt="Northern Mariana Islands Flag" /><span className="text-truncate">Northern Mariana Islands</span></span>'>Northern Mariana Islands</option>
                                            <option value="NO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/no.svg" alt="Norway Flag" /><span className="text-truncate">Norway</span></span>'>Norway</option>
                                            <option value="OM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/om.svg" alt="Oman Flag" /><span className="text-truncate">Oman</span></span>'>Oman</option>
                                            <option value="PK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pk.svg" alt="Pakistan Flag" /><span className="text-truncate">Pakistan</span></span>'>Pakistan</option>
                                            <option value="PW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pw.svg" alt="Palau Flag" /><span className="text-truncate">Palau</span></span>'>Palau</option>
                                            <option value="PA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pa.svg" alt="Panama Flag" /><span className="text-truncate">Panama</span></span>'>Panama</option>
                                            <option value="PG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pg.svg" alt="Papua New Guinea Flag" /><span className="text-truncate">Papua New Guinea</span></span>'>Papua New Guinea</option>
                                            <option value="PY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/py.svg" alt="Paraguay Flag" /><span className="text-truncate">Paraguay</span></span>'>Paraguay</option>
                                            <option value="PE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pe.svg" alt="Peru Flag" /><span className="text-truncate">Peru</span></span>'>Peru</option>
                                            <option value="PH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ph.svg" alt="Philippines Flag" /><span className="text-truncate">Philippines</span></span>'>Philippines</option>
                                            <option value="PN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pn.svg" alt="Pitcairn Flag" /><span className="text-truncate">Pitcairn</span></span>'>Pitcairn</option>
                                            <option value="PL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pl.svg" alt="Poland Flag" /><span className="text-truncate">Poland</span></span>'>Poland</option>
                                            <option value="PT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pt.svg" alt="Portugal Flag" /><span className="text-truncate">Portugal</span></span>'>Portugal</option>
                                            <option value="PR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pr.svg" alt="Puerto Rico Flag" /><span className="text-truncate">Puerto Rico</span></span>'>Puerto Rico</option>
                                            <option value="QA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/qa.svg" alt="Qatar Flag" /><span className="text-truncate">Qatar</span></span>'>Qatar</option>
                                            <option value="CG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/cg.svg" alt="Republic of the Congo Flag" /><span className="text-truncate">Republic of the Congo</span></span>'>Republic of the Congo</option>
                                            <option value="RO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ro.svg" alt="Romania Flag" /><span className="text-truncate">Romania</span></span>'>Romania</option>
                                            <option value="RU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ru.svg" alt="Russia Flag" /><span className="text-truncate">Russia</span></span>'>Russia</option>
                                            <option value="RW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/rw.svg" alt="Rwanda Flag" /><span className="text-truncate">Rwanda</span></span>'>Rwanda</option>
                                            <option value="RE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/re.svg" alt="Réunion Flag" /><span className="text-truncate">Réunion</span></span>'>Réunion</option>
                                            <option value="BL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/bl.svg" alt="Saint Barthélemy Flag" /><span className="text-truncate">Saint Barthélemy</span></span>'>Saint Barthélemy</option>
                                            <option value="SH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sh.svg" alt="Saint Helena, Ascension and Tristan da Cunha Flag" /><span className="text-truncate">Saint Helena, Ascension and Tristan da Cunha</span></span>'>Saint Helena, Ascension and Tristan da Cunha</option>
                                            <option value="KN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kn.svg" alt="Saint Kitts and Nevis Flag" /><span className="text-truncate">Saint Kitts and Nevis</span></span>'>Saint Kitts and Nevis</option>
                                            <option value="LC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lc.svg" alt="Saint Lucia Flag" /><span className="text-truncate">Saint Lucia</span></span>'>Saint Lucia</option>
                                            <option value="MF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/mf.svg" alt="Saint Martin Flag" /><span className="text-truncate">Saint Martin</span></span>'>Saint Martin</option>
                                            <option value="PM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/pm.svg" alt="Saint Pierre and Miquelon Flag" /><span className="text-truncate">Saint Pierre and Miquelon</span></span>'>Saint Pierre and Miquelon</option>
                                            <option value="VC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/vc.svg" alt="Saint Vincent and the Grenadines Flag" /><span className="text-truncate">Saint Vincent and the Grenadines</span></span>'>Saint Vincent and the Grenadines</option>
                                            <option value="WS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ws.svg" alt="Samoa Flag" /><span className="text-truncate">Samoa</span></span>'>Samoa</option>
                                            <option value="SM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sm.svg" "alt="San Marino Flag" /><span className="text-truncate">San Marino</span></span>'>San Marino</option>
                                            <option value="ST" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/st.svg" "alt="Sao Tome and Principe Flag" /><span className="text-truncate">Sao Tome and Principe</span></span>'>Sao Tome and Principe</option>
                                            <option value="SA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sa.svg" alt="Saudi Arabia Flag" /><span className="text-truncate">Saudi Arabia</span></span>'>Saudi Arabia</option>
                                            <option value="GB-SCT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gb-sct.svg" alt="Scotland Flag" /><span className="text-truncate">Scotland</span></span>'>Scotland</option>
                                            <option value="SN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sn.svg" alt="Senegal Flag" /><span className="text-truncate">Senegal</span></span>'>Senegal</option>
                                            <option value="RS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/rs.svg" alt="Serbia Flag" /><span className="text-truncate">Serbia</span></span>'>Serbia</option>
                                            <option value="SC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sc.svg" alt="Seychelles Flag" /><span className="text-truncate">Seychelles</span></span>'>Seychelles</option>
                                            <option value="SL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sl.svg" alt="Sierra Leone Flag" /><span className="text-truncate">Sierra Leone</span></span>'>Sierra Leone</option>
                                            <option value="SG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sg.svg" alt="Singapore Flag" /><span className="text-truncate">Singapore</span></span>'>Singapore</option>
                                            <option value="SX" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sx.svg" alt="Sint Maarten Flag" /><span className="text-truncate">Sint Maarten</span></span>'>Sint Maarten</option>
                                            <option value="SK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sk.svg" alt="Slovakia Flag" /><span className="text-truncate">Slovakia</span></span>'>Slovakia</option>
                                            <option value="SI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/si.svg" alt="Slovenia Flag" /><span className="text-truncate">Slovenia</span></span>'>Slovenia</option>
                                            <option value="SB" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sb.svg" alt="Solomon Islands Flag" /><span className="text-truncate">Solomon Islands</span></span>'>Solomon Islands</option>
                                            <option value="SO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/so.svg" alt="Somalia Flag" /><span className="text-truncate">Somalia</span></span>'>Somalia</option>
                                            <option value="ZA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/za.svg" alt="South Africa Flag" /><span className="text-truncate">South Africa</span></span>'>South Africa</option>
                                            <option value="GS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gs.svg" alt="South Georgia and the South Sandwich Islands Flag" /><span className="text-truncate">South Georgia and the South Sandwich Islands</span></span>'>South Georgia and the South Sandwich Islands</option>
                                            <option value="KR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/kr.svg" alt="South Korea Flag" /><span className="text-truncate">South Korea</span></span>'>South Korea</option>
                                            <option value="SS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ss.svg" alt="South Sudan Flag" /><span className="text-truncate">South Sudan</span></span>'>South Sudan</option>
                                            <option value="ES" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Spain Flag" /><span className="text-truncate">Spain</span></span>'>Spain</option>
                                            <option value="LK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/lk.svg" "alt="Sri Lanka Flag" /><span className="text-truncate">Sri Lanka</span></span>'>Sri Lanka</option>
                                            <option value="PS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ps.svg" alt="State of Palestine Flag" /><span className="text-truncate">State of Palestine</span></span>'>State of Palestine</option>
                                            <option value="SD" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sd.svg" alt="Sudan Flag" /><span className="text-truncate">Sudan</span></span>'>Sudan</option>
                                            <option value="SR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sr.svg" alt="Suriname Flag" /><span className="text-truncate">Suriname</span></span>'>Suriname</option>
                                            <option value="SJ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sj.svg" alt="Svalbard and Jan Mayen Flag" /><span className="text-truncate">Svalbard and Jan Mayen</span></span>'>Svalbard and Jan Mayen</option>
                                            <option value="SZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sz.svg" alt="Swaziland Flag" /><span className="text-truncate">Swaziland</span></span>'>Swaziland</option>
                                            <option value="SE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/se.svg" alt="Sweden Flag" /><span className="text-truncate">Sweden</span></span>'>Sweden</option>
                                            <option value="CH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ch.svg" alt="Switzerland Flag" /><span className="text-truncate">Switzerland</span></span>'>Switzerland</option>
                                            <option value="SY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/sy.svg" alt="Syrian Arab Republic Flag" /><span className="text-truncate">Syrian Arab Republic</span></span>'>Syrian Arab Republic</option>
                                            <option value="TW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tw.svg" alt="Taiwan Flag" /><span className="text-truncate">Taiwan</span></span>'>Taiwan</option>
                                            <option value="TJ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tj.svg" alt="Tajikistan Flag" /><span className="text-truncate">Tajikistan</span></span>'>Tajikistan</option>
                                            <option value="TZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tz.svg" alt="Tanzania Flag" /><span className="text-truncate">Tanzania</span></span>'>Tanzania</option>
                                            <option value="TH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/th.svg" alt="Thailand Flag" /><span className="text-truncate">Thailand</span></span>'>Thailand</option>
                                            <option value="TL" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tl.svg" alt="Timor-Leste Flag" /><span className="text-truncate">Timor-Leste</span></span>'>Timor-Leste</option>
                                            <option value="TG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tg.svg" alt="Togo Flag" /><span className="text-truncate">Togo</span></span>'>Togo</option>
                                            <option value="TK" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tk.svg" alt="Tokelau Flag" /><span className="text-truncate">Tokelau</span></span>'>Tokelau</option>
                                            <option value="TO" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/to.svg" alt="Tonga Flag" /><span className="text-truncate">Tonga</span></span>'>Tonga</option>
                                            <option value="TT" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tt.svg" alt="Trinidad and Tobago Flag" /><span className="text-truncate">Trinidad and Tobago</span></span>'>Trinidad and Tobago</option>
                                            <option value="TN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tn.svg" alt="Tunisia Flag" /><span className="text-truncate">Tunisia</span></span>'>Tunisia</option>
                                            <option value="TR" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tr.svg" alt="Turkey Flag" /><span className="text-truncate">Turkey</span></span>'>Turkey</option>
                                            <option value="TM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tm.svg" alt="Turkmenistan Flag" /><span className="text-truncate">Turkmenistan</span></span>'>Turkmenistan</option>
                                            <option value="TC" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tc.svg" alt="Turks and Caicos Islands Flag" /><span className="text-truncate">Turks and Caicos Islands</span></span>'>Turks and Caicos Islands</option>
                                            <option value="TV" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/tv.svg" alt="Tuvalu Flag" /><span className="text-truncate">Tuvalu</span></span>'>Tuvalu</option>
                                            <option value="UG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ug.svg" alt="Uganda Flag" /><span className="text-truncate">Uganda</span></span>'>Uganda</option>
                                            <option value="UA" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ua.svg" alt="Ukraine Flag" /><span className="text-truncate">Ukraine</span></span>'>Ukraine</option>
                                            <option value="AE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ae.svg" alt="United Arab Emirates Flag" /><span className="text-truncate">United Arab Emirates</span></span>'>United Arab Emirates</option>
                                            <option value="GB" selected data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="United Kingdom Flag" /><span className="text-truncate">United Kingdom</span></span>'>United Kingdom</option>
                                            <option value="UM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/um.svg" alt="United States Minor Outlying Islands Flag" /><span className="text-truncate">United States Minor Outlying Islands</span></span>'>United States Minor Outlying Islands</option>
                                            <option value="US" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="United States of America Flag" /><span className="text-truncate">United States of America</span></span>'>United States of America</option>
                                            <option value="UY" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/uy.svg" alt="Uruguay Flag" /><span className="text-truncate">Uruguay</span></span>'>Uruguay</option>
                                            <option value="UZ" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/uz.svg" alt="Uzbekistan Flag" /><span className="text-truncate">Uzbekistan</span></span>'>Uzbekistan</option>
                                            <option value="VU" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/vu.svg" alt="Vanuatu Flag" /><span className="text-truncate">Vanuatu</span></span>'>Vanuatu</option>
                                            <option value="VE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ve.svg" alt="Venezuela (Bolivarian Republic of) Flag" /><span className="text-truncate">Venezuela (Bolivarian Republic of)</span></span>'>Venezuela (Bolivarian Republic of)</option>
                                            <option value="VN" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/vn.svg" alt="Vietnam Flag" /><span className="text-truncate">Vietnam</span></span>'>Vietnam</option>
                                            <option value="VG" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/vg.svg" alt="Virgin Islands (British) Flag" /><span className="text-truncate">Virgin Islands (British)</span></span>'>Virgin Islands (British)</option>
                                            <option value="VI" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/vi.svg" alt="Virgin Islands (U.S.) Flag" /><span className="text-truncate">Virgin Islands (U.S.)</span></span>'>Virgin Islands (U.S.)</option>
                                            <option value="GB-WLS" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/gb-wls.svg" alt="Wales Flag" /><span className="text-truncate">Wales</span></span>'>Wales</option>
                                            <option value="WF" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/wf.svg" alt="Wallis and Futuna Flag" /><span className="text-truncate">Wallis and Futuna</span></span>'>Wallis and Futuna</option>
                                            <option value="EH" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/eh.svg" alt="Western Sahara Flag" /><span className="text-truncate">Western Sahara</span></span>'>Western Sahara</option>
                                            <option value="YE" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/ye.svg" alt="Yemen Flag" /><span className="text-truncate">Yemen</span></span>'>Yemen</option>
                                            <option value="ZM" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/zm.svg" alt="Zambia Flag" /><span className="text-truncate">Zambia</span></span>'>Zambia</option>
                                            <option value="ZW" data-option-template='<span className="d-flex align-items-center"><img className="avatar avatar-xss avatar-circle me-2" src="/assets/vendor/flag-icon-css/flags/1x1/zw.svg" alt="Zimbabwe Flag" /><span className="text-truncate">Zimbabwe</span></span>'>Zimbabwe</option>
                                        </select>
                                    </div>


                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="city" id="cityLabel" placeholder="City" aria-label="City" value="London" />
                                    </div>
                                    <input type="text" className="form-control" name="state" id="stateLabel" placeholder="State" aria-label="State" />
                                </div>
                            </div>


                            <div className="row mb-4">
                                <label for="addressLine1Label" className="col-sm-3 col-form-label form-label">Address line 1</label>

                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="addressLine1" id="addressLine1Label" placeholder="Your address" aria-label="Your address" value="45 Roker Terrace, Latheronwheel" />
                                </div>
                            </div>


                            <div className="js-add-field row mb-4"
                                data-hs-add-field-options='{
                "template": "#addAddressFieldTemplate",
                "container": "#addAddressFieldContainer",
                "defaultCreated": 0
              }'>
                                <label for="addressLine2Label" className="col-sm-3 col-form-label form-label">Address line 2 <span className="form-label-secondary">(Optional)</span></label>

                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="addressLine2" id="addressLine2Label" placeholder="Your address" aria-label="Your address" />


                                    <div id="addAddressFieldContainer"></div>

                                    <a href="javascript:;" className="js-create-field form-link">
                                        <i className="bi-plus-circle me-1"></i> Add address
                                    </a>
                                </div>
                            </div>


                            <div id="addAddressFieldTemplate" style={{ display: "none", position: "relative" }}>
                                <div className="input-group-add-field">
                                    <input type="text" className="form-control" data-name="addressLine" placeholder="Your address" aria-label="Your address" />
                                </div>

                                <a className="js-delete-field input-group-add-field-delete" href="javascript:;">
                                    <i className="bi-x-lg"></i>
                                </a>
                            </div>



                            <div className="row mb-4">
                                <label for="zipCodeLabel" className="col-sm-3 col-form-label form-label">Zip code <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="You can find your code in a postal address."></i></label>

                                <div className="col-sm-9">
                                    <input type="text" className="js-input-mask form-control" name="zipCode" id="zipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" value="KW5 8NW"
                                        data-hs-mask-options='{
                     "mask": "aa0 0aa"
                   }'/>
                                </div>
                            </div>

                        </form>
                    </div>



                    <div className="card-footer pt-0">
                        <div className="d-flex justify-content-end gap-3">
                            <a className="btn btn-white" href="javascript:;">Cancel</a>
                            <a className="btn btn-primary" href="javascript:;">Save changes</a>
                        </div>
                    </div>

                </div>



                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Privacy</h4>
                    </div>

                    <div className="card-body">
                        <form>
                            <div className="row mb-4">
                                <div className="col-sm-3">
                                    <span className="d-block small mb-2">Who can see your profile photo? <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Your visibility setting only applies to your profile photo. Your header image is always visible to anyone."></i></span>
                                </div>

                                <div className="col-sm-9">

                                    <div className="tom-select-custom">
                                        <select className="js-select form-select">
                                            <option value="privacy1" data-option-template='<div className="d-flex align-items-start"><div className="flex-shrink-0"><span className="svg-icon svg-icon-xs text-muted mt-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#035A4B"/>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.7357 20.9962C6.8874 20.8564 3 16.8822 3 12C3 11.9168 3.00113 11.8339 3.00337 11.7513C3.66233 11.8143 4.85637 11.9574 4.91263 12.4204C4.99049 13.0609 4.91263 13.8616 5.45805 14.1018C6.00346 14.342 6.15932 13.1409 6.62675 13.4613C7.09418 13.7816 8.34087 14.0899 8.34087 14.6562C8.34087 15.2224 8.10715 16.1035 8.34087 16.2636C8.57458 16.4238 9.50897 17.5447 9.50921 17.7048C9.50957 17.865 9.83858 18.6794 9.7404 18.9907C9.65905 19.2487 9.24858 20.0502 8.8506 20.4146C9.75315 20.7621 10.7236 20.9658 11.7358 20.9961L11.7357 20.9962ZM8.28274 3.80112C9.41585 3.28656 10.6745 3 12 3C15.5115 3 18.5532 5.01097 20.0365 7.94408C20.0697 8.72412 20.0638 9.39135 20.2361 9.63274C21.1132 10.8601 18.0995 11.7043 18.5573 13.5605C18.759 14.3795 16.5528 14.1197 16.014 14.8864C15.4748 15.6527 14.1575 15.1378 13.852 14.9905C13.5466 14.8432 12.3767 15.3342 12.4789 14.4995C12.5806 13.6646 13.2923 13.6156 14.0556 13.272C14.8185 12.9287 15.9189 11.7872 15.3782 11.638C12.8323 10.9362 11.9638 8.47852 11.9638 8.47852C11.8111 8.44901 11.8494 6.74109 11.1884 6.69207C10.5268 6.6428 10.1705 6.88841 9.20436 6.69207C8.23766 6.49573 8.44145 5.85744 8.28873 4.48256C8.25455 4.17416 8.2562 3.95717 8.28274 3.80112ZM20.9992 11.877C20.9997 11.918 21 11.9589 21 12C21 16.9407 17.0188 20.9515 12.0895 20.9996C16.9702 20.9503 20.9337 16.8884 20.9992 11.877V11.877Z" fill="#035A4B"/>
</svg>
</span></div><div className="flex-grow-1 ms-2"><span className="d-block fw-semibold">Anyone</span><span className="tom-select-custom-hide small">Visible to anyone who can view your content. Accessible by installed apps.</span></div></div>'>Anyone</option>
                                            <option value="privacy2" data-option-template='<div className="d-flex align-items-start"><div className="flex-shrink-0"><span className="svg-icon svg-icon-xs text-muted mt-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="#035A4B"/>
<path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="#035A4B"/>
</svg>
</span></div><div className="flex-grow-1 ms-2"><span className="d-block fw-semibold">Only you</span><span className="tom-select-custom-hide small">Only visible to you.</span></div></div>'>Only you</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>



                <div className="card">
                    <div className="card-header border-bottom">
                        <h4 className="card-header-title">Delete your account</h4>
                    </div>


                    <div className="card-body">
                        <p className="card-text">When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>

                        <div className="mb-4">

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="deleteAccountCheckbox" />
                                <label className="form-check-label" for="deleteAccountCheckbox">Confirm that I want to delete my account.</label>
                            </div>

                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
