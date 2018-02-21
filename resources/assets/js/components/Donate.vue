<style scoped>
    div.donation-form-container {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        border: 1px solid cornflowerblue;
        border-radius: 12px;
    }
    h2
    {
        text-align: center;
    }
</style>

<template>
    <div class="donation-form-container">
        <h2>Make a Donation</h2>

        <form>
            <!-- Donation Options -->
            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">Pay with</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <label class="radio">
                                <input type="radio" id="creditCardPayment" value="creditCard" v-model="paymentMethod">
                                Credit Card
                            </label>
                            <label class="radio">
                                <input type="radio" id="checkPayment" value="check" v-model="paymentMethod">
                                Check
                            </label>
                            <label class="radio">
                                <input type="radio" id="paypalGivingFund" value="paypalGivingFund" v-model="paymentMethod">
                                Paypal Giving Fund
                            </label>
                            <label class="radio">
                                <input type="radio" id="paypal" value="paypal" v-model="paymentMethod">
                                Paypal
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">Matching ?</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <label class="radio">
                                <input type="radio" id="yesMatching" value="Yes" v-model="hasMatching">
                                Yes
                            </label>
                            <label class="radio">
                                <input type="radio" id="noMatching" value="No" v-model="hasMatching">
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Designation</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" id="designation" v-model="designation">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Donation Options Ends-->

            <hr>

            <donation-form-basic></donation-form-basic>

            <check-payment v-if="paymentMethod == 'check'"></check-payment>

            <credit-card-payment v-if="paymentMethod == 'creditCard'"></credit-card-payment>

            <paypal-payment v-if="paymentMethod == 'paypal'"></paypal-payment>

            <pay-via-paypal-giving-fund v-if="paymentMethod == 'paypalGivingFund'"></pay-via-paypal-giving-fund>

            <matching v-if="hasMatching == 'Yes'"></matching>

            <hr>

            <div class="field is-horizontal">
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-primary is-pulled-right">
                                Confirm Donation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
  import DonationFormBasic from './partials/forms/DonationFormBasic.vue'
  import CheckPayment from './partials/forms/DonationFormPaymentCheck.vue'
  import CreditCardPayment from './partials/forms/DonationFormPaymentCreditCard.vue'
  import PaypalPayment from './partials/forms/DonationFormPaymentPaypal.vue'
  import PayViaPaypalGivingFund from './partials/forms/DonationFormPaymentPaypalGivingFund.vue'
  import Matching from './partials/forms/DonationFormMatching.vue'

  export default{
    components: {
      DonationFormBasic, Matching, CreditCardPayment, CheckPayment, PaypalPayment, PayViaPaypalGivingFund
    },
    data() {
      return {
        hasMatching: 'No',
        paymentMethod: 'creditCard'
      }
    }
  }
</script>
