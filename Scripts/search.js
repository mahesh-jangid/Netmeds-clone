const search = [
    {
        disc: ``,
        image: `https://www.netmeds.com/images/product-v1/150x150/828833/vlcc_3d_youth_boost_spf_40_sunscreen_gel_creme_100_gm_0.jpg`,
        name: `VLCC 3D Youth Boost SPF 40 Sunscreen Gel Creme 100 gm`,
        mfr: ` VLCC Personal Care Ltd`,
        price1: ``,
        price2: 395,
    },
    {
        disc: `${10}% OFF`,
        image: `https://www.netmeds.com/images/product-v1/150x150/909312/vegetal_bio_spf_30_sunscreen_lotion_100_ml_0_0.jpg`,
        name: `Vegetal BIO SPF-30 Sunscreen Lotion 100 ml`,
        mfr: ` AMA HERBAL LABORATORATORIES`,
        price1: `Rs. ${485}`,
        price2: 436.5,
    },
    {
        disc: `${15}% OFF`,
        image: `https://www.netmeds.com/images/product-v1/150x150/902958/avene_very_high_protection_cleanance_spf_50_50_ml_n_0_0.jpg`,
        name: `Avene Very High Protection SPF 50+ Cleanance Sunscreen Cream 50 ml`,
        mfr: ` Abbott Healthcare Pvt. Ltd.`,
        price1: `Rs. ${1800.0}`,
        price2: 1620.0,
    },
    {
        disc: ``,
        image: `https://www.netmeds.com/images/product-v1/150x150/819281/vlcc_radiance_pro_spf_30_pa_sunscreen_gel_50_gm_0_1.jpg`,
        name: `VLCC Radiance Pro SPF 30 Pa+++ Sunscreen Gel 50 gm`,
        mfr: `VLCC Personal Care Ltd`,
        price1: ``,
        price2: 265,
    },
    {
        disc: `${10}% OFF`,
        image: `https://www.netmeds.com/images/product-v1/150x150/824272/sri_sri_tattva_protecting_sunscreen_60_ml_0.jpg`,
        name: `Sri Sri Tattva Protecting Sunscreen 60 ml`,
        mfr: `Sriveda Sattva Pvt Ltd`,
        price1: `Rs. ${80}`,
        price2: 72,
    },
    {
        disc: `${12}% OFF`,
        image: `https://www.netmeds.com/images/product-v1/150x150/829467/ayur_herbal_spf_15_sunshield_cream_100_ml_0.jpg`,
        name: `Ayur Herbal SPF 15 Sunscreen Lotion 100 ml`,
        mfr: `Ayur Herbals`,
        price1: `Rs. ${100}`,
        price2: 88,
    },
    // {
    //     disc: `${18}% OFF`,
    //     image: `https://www.netmeds.com/images/product-v1/150x150/407053/biotique_bio_aloe_vera_30_spf_uva_uvb_sunscreen_ultra_soothing_face_cream_for_normal_to_oily_skin_50_gm_0.jpg`,
    //     name: `Biotique Bio Aloe Vera 30+ SPF UVA/UVB Sunscreen Ultra Soothing Face Cream for Normal to Oily Skin 50 gm`,
    //     mfr: ` Bio Veda Action Research Company`,
    //     price1: `Rs. ${220}`,
    //     price2: 180,
    // },
    // {
    //     disc: `${6}% OFF`,
    //     image: `https://www.netmeds.com/images/product-v1/150x150/408895/himalaya_herbals_spf_15_protective_sunscreen_lotion_50_ml_0.jpg`,
    //     name: `Himalaya Herbals SPF 15 Protective Sunscreen Lotion 50 ml`,
    //     mfr: ` The Himalaya Drug Company`,
    //     price1: `Rs. ${120}`,
    //     price2: 112.8,
    // },
];
// console.log(`Search`, search[0].name)
const searchProduct = () => {
    let filter = document.getElementById('searchProduct').value.toUpperCase();

    search.forEach(el => {
        let textValue = el.name;
        console.log(textValue)

        for (let i = 0; i < textValue.length; i++) {


            if (textValue[i].toUpperCase().indexOf(filter) > -1) {
                textValue[i].style.display = '';
            }
            else {
                textValue[i].style.display = 'none';
            }
        }

    });
}
searchProduct()
