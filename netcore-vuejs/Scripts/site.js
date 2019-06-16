import { validateEmail } from './utils';
import { debug } from 'util';

//var searchJob = new Vue({
//    el: '#searchjob',
//    data: {
//        loaded: false
//    },
//    computed: {
//        visuals: function () {
//            return this.loaded ? 'fas fa-search' : 'fas fa-search navbar-loaded';
//        }
//    },
//    mounted: function () {
//        this.loaded = true;
//    }
//});

var app = new Vue({
    el: '#form',
    data: {
        FirstName: '',
        LastName: '',
        Email: '',
        MobilePhone: 0,
        Category: '',
        Specialty: '',
        StateLicense: '',
        HearAbout: ''        
    },
    computed: {
        isSubmitDisabled() {
            let isDisabled = true;

            return isDisabled;
        }
    },
    methods: {
        ResetForm() {
            //this.FullName = '';
            //this.Email = '';
            //this.Comments = '';
        },
        CheckEmail() {
            if (!validateEmail(this.Email)) {
                this.InvalidEmail = true;
            } else {
                this.InvalidEmail = false;
            }
        },
        SubmitForm() {
            let submit = true;

            if (!validateEmail(this.Email)) {
                this.InvalidEmail = true;
                submit = false;
                this.$bvModal.msgBoxOk("Invalid Email",
                    {
                        title: 'test 1',
                        size: 'sm',
                        buttonSize: 'sm',
                        okVariant: 'danger',
                        headerClass: 'p-2 border-bottom-0',
                        footerClass: 'p-2 border-top-0',
                        centered: true
                    });

            } else {
                this.InvalidEmail = false;
            }

            if (submit) {
                axios({
                    method: 'post',
                    url: '/Home/SubmitedForm',
                    data: { "Fields": this.$data }
                }).then(res => {
                    //this.$bvModal.msgBoxOk("Successfully submitted feedback form",
                    //    {
                    //        title: 'test 1',
                    //        size: 'sm',
                    //        buttonSize: 'sm',
                    //        okVariant: 'danger',
                    //        headerClass: 'p-2 border-bottom-0',
                    //        footerClass: 'p-2 border-top-0',
                    //        centered: true
                    //    });

                    //this.$refs.SubmitButton.setAttribute("disabled", "disabled");
                    this.$bvModal.msgBoxConfirm("Is this the right info?\n\n" + res.request.responseText,
                        {
                            title: 'test',
                            size: 'sm',
                            buttonSize: 'sm',
                            okVariant: 'danger',
                            headerClass: 'p-2 border-bottom-0',
                            footerClass: 'p-2 border-top-0',
                            centered: true
                        })
                        .then(value => {
                            if (value) {
                                alert('ok');
                            }
                        });

                }).catch(err => {
                    alert(`There was an error submitting your form. See details: ${err}`);
                    });
            }
        }
    }
});

