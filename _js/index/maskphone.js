function is_numeric( mixed_var ) {
  return !isNaN( mixed_var );
}


$(document).ready(function(){

    let getActiveCountry = getCookie('activeCountrySelect');
    if(getActiveCountry) {
        $("select[data-select-mask=true] option[value=" + getActiveCountry + "]").attr({ "selected" : "selected" });
    }
    maskPhoneAll();

    $("select[data-select-mask=true]").change(function() {
        setCookieDays('activeCountrySelect', $(this).val(), 7);
        maskPhone($(this).attr('id'));
        $("input[data-input-to-select="+$(this).attr('id')+"]").attr({ "placeholder" : $('#'+$(this).attr('id')+' option:selected').data('code') });
    });

});
function maskPhoneAll(){
    $("select[data-select-mask=true]").each(function( index ) {
        maskPhone($(this).attr('id'));
    });
}
function maskPhone(countryId) {
  var country = $('#'+countryId+' option:selected').val();
  switch (country) {

      case "DZ":
          $("input[data-input-to-select="+countryId+"]").mask("+213dddddd?ddddd");
          break;
      case "AD":
          $("input[data-input-to-select="+countryId+"]").mask("+376dddddd?d");
          break;
      case "AF":
          $("input[data-input-to-select="+countryId+"]").mask("+93dddddddd?dd");
          break;
      case "AO":
          $("input[data-input-to-select="+countryId+"]").mask("+244ddddddd?dd");
          break;
      case "AI":
          $("input[data-input-to-select="+countryId+"]").mask("+1268dddddd?dd");
          break;
      case "AL":
          $("input[data-input-to-select="+countryId+"]").mask("+355dddddddd?dd");
          break;
      case "AR":
          $("input[data-input-to-select="+countryId+"]").mask("+549ddddddddd?dd");
          break;
      case "AM":
          $("input[data-input-to-select="+countryId+"]").mask("+374ddddddd?dd");
          break;
      case "AW":
          $("input[data-input-to-select="+countryId+"]").mask("+297dddddd?dd");
          break;
      case "AU":
          $("input[data-input-to-select="+countryId+"]").mask("+61dddddddd?dd");
          break;
      case "AT":
          $("input[data-input-to-select="+countryId+"]").mask("+43ddddddddd?dd");
          break;
      case "AZ":
          $("input[data-input-to-select="+countryId+"]").mask("+994dddddddd?dd");
          break;
      case "BS":
          $("input[data-input-to-select="+countryId+"]").mask("+1242dddddd?dd");
          break;
      case "BH":
          $("input[data-input-to-select="+countryId+"]").mask("+973ddddddd?dd");
          break;
      case "BD":
          $("input[data-input-to-select="+countryId+"]").mask("+880ddddddddd?dd");
          break;
      case "BB":
          $("input[data-input-to-select="+countryId+"]").mask("+1ddddddddd?dd");
          break;
      case "BY":
          $("input[data-input-to-select="+countryId+"]").mask("+375dddddddd?dd");
          break;
      case "BE":
          $("input[data-input-to-select="+countryId+"]").mask("+32dddddddd?dd");
          break;
      case "BZ":
          $("input[data-input-to-select="+countryId+"]").mask("+501dddddd?dd");
          break;
      case "BJ":
          $("input[data-input-to-select="+countryId+"]").mask("+229ddddddd?dd");
          break;
      case "BM":
          $("input[data-input-to-select="+countryId+"]").mask("+1441dddddd?dd");
          break;
      case "BT":
          $("input[data-input-to-select="+countryId+"]").mask("+975ddddddd?dd");
          break;
      case "BO":
          $("input[data-input-to-select="+countryId+"]").mask("+591ddddddd?dd");
          break;
      case "BA":
          $("input[data-input-to-select="+countryId+"]").mask("+387ddddddd?dd");
          break;
      case "BW":
          $("input[data-input-to-select="+countryId+"]").mask("+267ddddddd?dd");
          break;
      case "BR":
          $("input[data-input-to-select="+countryId+"]").mask("+55ddddddddd?dd");
          break;
      case "BN":
          $("input[data-input-to-select="+countryId+"]").mask("+673dddddd?dd");
          break;
      case "BG":
          $("input[data-input-to-select="+countryId+"]").mask("+359dddddddd?dd");
          break;
      case "BF":
          $("input[data-input-to-select="+countryId+"]").mask("+226ddddddd?dd");
          break;
      case "BI":
          $("input[data-input-to-select="+countryId+"]").mask("+257dddddddd?dd");
          break;
      case "CA":
          $("input[data-input-to-select="+countryId+"]").mask("+1dddddddddd?dd");
          break;
      case "KH":
          $("input[data-input-to-select="+countryId+"]").mask("+855dddddddd?dd");
          break;
      case "CM":
          $("input[data-input-to-select="+countryId+"]").mask("+237dddddddd?dd");
          break;
      case "CV":
          $("input[data-input-to-select="+countryId+"]").mask("+238dddddd?dd");
          break;
      case "KY":
          $("input[data-input-to-select="+countryId+"]").mask("+1dddddddddd?dd");
          break;
      case "CF":
          $("input[data-input-to-select="+countryId+"]").mask("+236dddddddd?dd");
          break;
      case "CL":
          $("input[data-input-to-select="+countryId+"]").mask("+56ddddddddd?dd");
          break;
      case "CN":
          $("input[data-input-to-select="+countryId+"]").mask("+86dddddddddd?dd");
          break;
      case "CO":
          $("input[data-input-to-select="+countryId+"]").mask("+57dddddddddd?dd");
          break;
      case "KM":
          $("input[data-input-to-select="+countryId+"]").mask("+269dddddd?dd");
          break;
      case "CG":
          $("input[data-input-to-select="+countryId+"]").mask("+242ddddddddd?dd");
          break;
      case "CK":
          $("input[data-input-to-select="+countryId+"]").mask("+682dddd?dd");
          break;
      case "CR":
          $("input[data-input-to-select="+countryId+"]").mask("+506ddddddddd?dd");
          break;
      case "HR":
          $("input[data-input-to-select="+countryId+"]").mask("+385ddddddddd?dd");
          break;
      case "CU":
          $("input[data-input-to-select="+countryId+"]").mask("+53ddddddd?dd");
          break;
      case "CY":
          $("input[data-input-to-select="+countryId+"]").mask("+357ddddddd?dd");
          break;
      case "CZ":
          $("input[data-input-to-select="+countryId+"]").mask("+42ddddddddd?dd");
          break;
      case "DK":
          $("input[data-input-to-select="+countryId+"]").mask("+45ddddddd?dd");
          break;
      case "DO":
          $("input[data-input-to-select="+countryId+"]").mask("+1ddddddddd?dd");
          break;
      case "EC":
          $("input[data-input-to-select="+countryId+"]").mask("+593dddddddd?dd");
          break;
      case "EG":
          $("input[data-input-to-select="+countryId+"]").mask("+20ddddddddd?dd");
          break;
      case "IE":
          $("input[data-input-to-select="+countryId+"]").mask("+353dddddddd?dd");
          break;
      case "SV":
          $("input[data-input-to-select="+countryId+"]").mask("+503ddddddd?dd");
          break;
      case "GQ":
          $("input[data-input-to-select="+countryId+"]").mask("+240dddddddd?dd");
          break;
      case "ES":
          $("input[data-input-to-select="+countryId+"]").mask("+34dddddddd?dd");
          break;
      case "EE":
          $("input[data-input-to-select="+countryId+"]").mask("+372ddddddd?dd");
          break;
      case "ET":
          $("input[data-input-to-select="+countryId+"]").mask("+251dddddddd?dd");
          break;
      case "FJ":
          $("input[data-input-to-select="+countryId+"]").mask("+679dddddd?dd");
          break;
      case "FI":
          $("input[data-input-to-select="+countryId+"]").mask("+358dddddddd?dd");
          break;
      case "FR":
          $("input[data-input-to-select="+countryId+"]").mask("+33dddddddd?dd");
          break;
      case "GF":
          $("input[data-input-to-select="+countryId+"]").mask("+594dddddddd?dd");
          break;
      case "PF":
          $("input[data-input-to-select="+countryId+"]").mask("+689ddddd?dd");
          break;
      case "GA":
          $("input[data-input-to-select="+countryId+"]").mask("+241ddddddd?dd");
          break;
      case "GM":
          $("input[data-input-to-select="+countryId+"]").mask("+220dddddd?dd");
          break;
      case "GE":
          $("input[data-input-to-select="+countryId+"]").mask("+995dddddddd?dd");
          break;
      case "DE":
          $("input[data-input-to-select="+countryId+"]").mask("+49ddddddddd?dd");
          break;
      case "GH":
          $("input[data-input-to-select="+countryId+"]").mask("+233dddddddd?dd");
          break;
      case "GI":
          $("input[data-input-to-select="+countryId+"]").mask("+350ddddddd?dd");
          break;
      case "GR":
          $("input[data-input-to-select="+countryId+"]").mask("+30ddddddddd?dd");
          break;
      case "GL":
          $("input[data-input-to-select="+countryId+"]").mask("+299ddddd?dd");
          break;
      case "GD":
          $("input[data-input-to-select="+countryId+"]").mask("+1ddddddddd?dd");
          break;
      case "GP":
          $("input[data-input-to-select="+countryId+"]").mask("+590dddddddd?dd");
          break;
      case "GT":
          $("input[data-input-to-select="+countryId+"]").mask("+502ddddddd?dd");
          break;
      case "GN":
          $("input[data-input-to-select="+countryId+"]").mask("+224ddddddd?dd");
          break;
      case "GW":
          $("input[data-input-to-select="+countryId+"]").mask("+245dddddd?dd");
          break;
      case "HT":
          $("input[data-input-to-select="+countryId+"]").mask("+509ddddddd?dd");
          break;
      case "HN":
          $("input[data-input-to-select="+countryId+"]").mask("+504ddddddd?dd");
          break;
      case "HK":
          $("input[data-input-to-select="+countryId+"]").mask("+852ddddddd?dd");
          break;
      case "HU":
          $("input[data-input-to-select="+countryId+"]").mask("+36dddddddd?dd");
          break;
      case "IS":
          $("input[data-input-to-select="+countryId+"]").mask("+354dddddd?dd");
          break;
      case "IN":
          $("input[data-input-to-select="+countryId+"]").mask("+91ddddddddd?dd");
          break;
      case "ID":
          $("input[data-input-to-select="+countryId+"]").mask("+62ddddddddd?dd");
          break;
      case "IR":
          $("input[data-input-to-select="+countryId+"]").mask("+98ddddddddd?dd");
          break;
      case "IQ":
          $("input[data-input-to-select="+countryId+"]").mask("+964ddddddddd?dd");
          break;
      case "IL":
          $("input[data-input-to-select="+countryId+"]").mask("+972dddddddd?dd");
          break;
      case "IT":
          $("input[data-input-to-select="+countryId+"]").mask("+39ddddddddd?dd");
          break;
      case "JM":
          $("input[data-input-to-select="+countryId+"]").mask("+1ddddddddd?dd");
          break;
      case "JP":
          $("input[data-input-to-select="+countryId+"]").mask("+81ddddddddd?dd");
          break;
      case "JO":
          $("input[data-input-to-select="+countryId+"]").mask("+962dddddddd?dd");
          break;
      case "KZ":
          $("input[data-input-to-select="+countryId+"]").mask("+7ddddddddd?dd");
          break;
      case "KE":
          $("input[data-input-to-select="+countryId+"]").mask("+254dddddddd?dd");
          break;
      case "KI":
          $("input[data-input-to-select="+countryId+"]").mask("+686dddddddd?dd");
          break;
      case "KP":
          $("input[data-input-to-select="+countryId+"]").mask("+850dddddddd?dd");
          break;
      case "KR":
          $("input[data-input-to-select="+countryId+"]").mask("+82dddddddddd?dd");
          break;
      case "KW":
          $("input[data-input-to-select="+countryId+"]").mask("+965ddddddd?dd");
          break;
      case "KG":
          $("input[data-input-to-select="+countryId+"]").mask("+996dddddddd?dd");
          break;
      case "LA":
          $("input[data-input-to-select="+countryId+"]").mask("+856dddddddd?dd");
          break;
      case "LV":
          $("input[data-input-to-select="+countryId+"]").mask("+371ddddddd?dd");
          break;
      case "LB":
          $("input[data-input-to-select="+countryId+"]").mask("+961ddddddd?dd");
          break;
      case "LS":
          $("input[data-input-to-select="+countryId+"]").mask("+266ddddddd?dd");
          break;
      case "LR":
          $("input[data-input-to-select="+countryId+"]").mask("+231ddddddd?dd");
          break;
      case "LY":
          $("input[data-input-to-select="+countryId+"]").mask("+218ddddddd?dd");
          break;
      case "LI":
          $("input[data-input-to-select="+countryId+"]").mask("+423dddddddd?dd");
          break;
      case "LT":
          $("input[data-input-to-select="+countryId+"]").mask("+370ddddddd?dd");
          break;
      case "LU":
          $("input[data-input-to-select="+countryId+"]").mask("+352dddddddd?dd");
          break;
      case "MO":
          $("input[data-input-to-select="+countryId+"]").mask("+853ddddddd?dd");
          break;
      case "MK":
          $("input[data-input-to-select="+countryId+"]").mask("+389ddddddd?dd");
          break;
      case "MG":
          $("input[data-input-to-select="+countryId+"]").mask("+261dddddddd?dd");
          break;
      case "MW":
          $("input[data-input-to-select="+countryId+"]").mask("+265dddddddd?dd");
          break;
      case "MY":
          $("input[data-input-to-select="+countryId+"]").mask("+60dddddddd?dd");
          break;
      case "MV":
          $("input[data-input-to-select="+countryId+"]").mask("+960dddddd?dd");
          break;
      case "ML":
          $("input[data-input-to-select="+countryId+"]").mask("+223ddddddd?dd");
          break;
      case "MT":
          $("input[data-input-to-select="+countryId+"]").mask("+356ddddddd?dd");
          break;
      case "MH":
          $("input[data-input-to-select="+countryId+"]").mask("+692ddddddd?dd");
          break;
      case "MQ":
          $("input[data-input-to-select="+countryId+"]").mask("+596dddddddd?dd");
          break;
      case "MR":
          $("input[data-input-to-select="+countryId+"]").mask("+222ddddddd?dd");
          break;
      case "MX":
          $("input[data-input-to-select="+countryId+"]").mask("+52dddddddddd?dd");
          break;
      case "FM":
          $("input[data-input-to-select="+countryId+"]").mask("+691ddddddd?dd");
          break;
      case "MD":
          $("input[data-input-to-select="+countryId+"]").mask("+373ddddddd?dd");
          break;
      case "MC":
          $("input[data-input-to-select="+countryId+"]").mask("+377dddddddd?dd");
          break;
      case "MN":
          $("input[data-input-to-select="+countryId+"]").mask("+976ddddddd?dd");
          break;
      case "MA":
          $("input[data-input-to-select="+countryId+"]").mask("+212dddddddd?dd");
          break;
      case "MZ":
          $("input[data-input-to-select="+countryId+"]").mask("+258dddddddd?dd");
          break;
      case "MM":
          $("input[data-input-to-select="+countryId+"]").mask("+95dddddddd?dd");
          break;
      case "NA":
          $("input[data-input-to-select="+countryId+"]").mask("+264dddddddd?dd");
          break;
      case "NR":
          $("input[data-input-to-select="+countryId+"]").mask("+674dddddd?dd");
          break;
      case "NP":
          $("input[data-input-to-select="+countryId+"]").mask("+977ddddddddd?dd");
          break;
      case "NL":
          $("input[data-input-to-select="+countryId+"]").mask("+31dddddddd?dd");
          break;
      case "NC":
          $("input[data-input-to-select="+countryId+"]").mask("+687ddddd?dd");
          break;
      case "NZ":
          $("input[data-input-to-select="+countryId+"]").mask("+64dddddddd?dd");
          break;
      case "NI":
          $("input[data-input-to-select="+countryId+"]").mask("+505ddddddd?dd");
          break;
      case "NE":
          $("input[data-input-to-select="+countryId+"]").mask("+227ddddddd?dd");
          break;
      case "NG":
          $("input[data-input-to-select="+countryId+"]").mask("+234ddddddddd?dd");
          break;
      case "MP":
          $("input[data-input-to-select="+countryId+"]").mask("+670ddddddd?dd");
          break;
      case "NO":
          $("input[data-input-to-select="+countryId+"]").mask("+47ddddddd?dd");
          break;
      case "OM":
          $("input[data-input-to-select="+countryId+"]").mask("+968ddddddd?dd");
          break;
      case "PW":
          $("input[data-input-to-select="+countryId+"]").mask("+680ddddddd?dd");
          break;
      case "PA":
          $("input[data-input-to-select="+countryId+"]").mask("+507ddddddd?dd");
          break;
      case "PK":
          $("input[data-input-to-select="+countryId+"]").mask("+92ddddddddd?dd");
          break;
      case "PG":
          $("input[data-input-to-select="+countryId+"]").mask("+675dddddd?dd");
          break;
      case "PY":
          $("input[data-input-to-select="+countryId+"]").mask("+595dddddddd?dd");
          break;
      case "PE":
          $("input[data-input-to-select="+countryId+"]").mask("+51dddddddd?dd");
          break;
      case "PH":
          $("input[data-input-to-select="+countryId+"]").mask("+63ddddddddd?dd");
          break;
      case "PL":
          $("input[data-input-to-select="+countryId+"]").mask("+48dddddddd?dd");
          break;
      case "PT":
          $("input[data-input-to-select="+countryId+"]").mask("+351dddddddd?dd");
          break;
      case "PR":
          $("input[data-input-to-select="+countryId+"]").mask("+1ddddddddd?dd");
          break;
      case "QA":
          $("input[data-input-to-select="+countryId+"]").mask("+974ddddddd?dd");
          break;
      case "RE":
          $("input[data-input-to-select="+countryId+"]").mask("+262dddddddd?dd");
          break;
      case "RO":
          $("input[data-input-to-select="+countryId+"]").mask("+40dddddddd?dd");
          break;
      case "RU":
          $("input[data-input-to-select="+countryId+"]").mask("+7ddddddddd?dd");
          break;
      case "RW":
          $("input[data-input-to-select="+countryId+"]").mask("+250dddddddd?dd");
          break;
      case "SM":
          $("input[data-input-to-select="+countryId+"]").mask("+378ddddddd?dd");
          break;
      case "ST":
          $("input[data-input-to-select="+countryId+"]").mask("+239ddddddd?dd");
          break;
      case "SA":
          $("input[data-input-to-select="+countryId+"]").mask("+966dddddddd?dd");
          break;
      case "SN":
          $("input[data-input-to-select="+countryId+"]").mask("+221dddddddd?dd");
          break;
      case "CS":
          $("input[data-input-to-select="+countryId+"]").mask("+381ddddddd?dd");
          break;
      case "SC":
          $("input[data-input-to-select="+countryId+"]").mask("+248dddddd?dd");
          break;
      case "SL":
          $("input[data-input-to-select="+countryId+"]").mask("+232ddddddd?dd");
          break;
      case "SG":
          $("input[data-input-to-select="+countryId+"]").mask("+65ddddddd?dd");
          break;
      case "SK":
          $("input[data-input-to-select="+countryId+"]").mask("+421dddddddd?dd");
          break;
      case "SI":
          $("input[data-input-to-select="+countryId+"]").mask("+386ddddddd?dd");
          break;
      case "SB":
          $("input[data-input-to-select="+countryId+"]").mask("+677dddddd?dd");
          break;
      case "SO":
          $("input[data-input-to-select="+countryId+"]").mask("+252ddddddd?dd");
          break;
      case "ZA":
          $("input[data-input-to-select="+countryId+"]").mask("+27dddddddd?dd");
          break;
      case "SS":
          $("input[data-input-to-select="+countryId+"]").mask("+211ddddddd?dd");
          break;
      case "LK":
          $("input[data-input-to-select="+countryId+"]").mask("+94dddddddd?dd");
          break;
      case "SH":
          $("input[data-input-to-select="+countryId+"]").mask("+290ddddddd?dd");
          break;
      case "SD":
          $("input[data-input-to-select="+countryId+"]").mask("+249dddddddd?dd");
          break;
      case "SR":
          $("input[data-input-to-select="+countryId+"]").mask("+597dddddd?dd");
          break;
      case "SE":
          $("input[data-input-to-select="+countryId+"]").mask("+46dddddddd?dd");
          break;
      case "CH":
          $("input[data-input-to-select="+countryId+"]").mask("+41dddddddd?dd");
          break;
      case "SY":
          $("input[data-input-to-select="+countryId+"]").mask("+963dddddddd?dd");
          break;
      case "TW":
          $("input[data-input-to-select="+countryId+"]").mask("+886dddddddd?dd");
          break;
      case "TZ":
          $("input[data-input-to-select="+countryId+"]").mask("+255dddddddd?dd");
          break;
      case "TH":
          $("input[data-input-to-select="+countryId+"]").mask("+66dddddddd?dd");
          break;
      case "TG":
          $("input[data-input-to-select="+countryId+"]").mask("+228ddddddd?dd");
          break;
      case "TO":
          $("input[data-input-to-select="+countryId+"]").mask("+676dddddd?dd");
          break;
      case "TT":
          $("input[data-input-to-select="+countryId+"]").mask("+1868dddddd?dd");
          break;
      case "TN":
          $("input[data-input-to-select="+countryId+"]").mask("+216ddddddd?dd");
          break;
      case "TR":
          $("input[data-input-to-select="+countryId+"]").mask("+90ddddddddd?dd");
          break;
      case "TJ":
          $("input[data-input-to-select="+countryId+"]").mask("+992dddddddd?dd");
          break;
      case "TM":
          $("input[data-input-to-select="+countryId+"]").mask("+993ddddddd?dd");
          break;
      case "TV":
          $("input[data-input-to-select="+countryId+"]").mask("+688ddddddd?dd");
          break;
      case "US":
          $("input[data-input-to-select="+countryId+"]").mask("+1ddddddddd?dd");
          break;
      case "UA":
          $("input[data-input-to-select="+countryId+"]").mask("+380dddddddd?dd");
          break;
      case "UZ":
          $("input[data-input-to-select="+countryId+"]").mask("+998dddddddd?dd");
          break;
      case "UG":
          $("input[data-input-to-select="+countryId+"]").mask("+256dddddddd?dd");
          break;
      case "GB":
          $("input[data-input-to-select="+countryId+"]").mask("+44ddddddddd?dd");
          break;
      case "AE":
          $("input[data-input-to-select="+countryId+"]").mask("+971dddddddd?dd");
          break;
      case "UY":
          $("input[data-input-to-select="+countryId+"]").mask("+598ddddddd?dd");
          break;
      case "VU":
          $("input[data-input-to-select="+countryId+"]").mask("+678dddddd?dd");
          break;
      case "VN":
          $("input[data-input-to-select="+countryId+"]").mask("+84dddddddd?dd");
          break;
      case "VE":
          $("input[data-input-to-select="+countryId+"]").mask("+58ddddddddd?dd");
          break;
      case "WF":
          $("input[data-input-to-select="+countryId+"]").mask("+681ddddddd?dd");
          break;
      case "YE":
          $("input[data-input-to-select="+countryId+"]").mask("+967dddddddd?dd");
          break;
      case "ZM":
          $("input[data-input-to-select="+countryId+"]").mask("+260dddddddd?dd");
          break;
      case "ZW":
          $("input[data-input-to-select="+countryId+"]").mask("+263dddddddd?dd");
          break;

  }
    $("input[data-input-to-select="+countryId+"]").attr({ "placeholder" : $('#country option:selected').data('code') });
}
