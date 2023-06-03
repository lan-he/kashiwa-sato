import React, { useEffect, useState } from 'react'

function Home() {
    let listData = []
    for (let index = 0; index < 18; index++) {
        listData = listData.concat([
            {
                imgurl: 'https://kashiwasato.com/cms/wp-content/uploads/2023/05/UNIQLO-LOGO-STORE_MAEBASHI_SQUARE-1125x1125.jpg',
                title: 'UNIQLO LOGO STORE',
                details1: 'Client : FAST RETAILING CO., LTD.',
                details2: 'Total creative direction・Design supervision : Kashiwa Sato',
                details3:
                    'Lead Architect・Architectural Design・Sustainable Design : TAKENAKA CORPORATION',
                details4: 'Interior Design : TAKENAKA CORPORATION / NOMURA'
            },
            {
                imgurl: 'https://kashiwasato.com/cms/wp-content/uploads/2023/05/KURA-SUSHI_TAIWAN_Square.jpg',
                title: 'KURA SUSHI TAIWAN',
                details1: 'Client : Kura Sushi, Inc.',
                details2: 'Creative Director : Kashiwa Sato',
                details3: 'Art Director : Yoshiki Okuse',
                details4: 'Architect : Yoshihiro Saito'
            },
            {
                imgurl: 'https://kashiwasato.com/cms/wp-content/uploads/2023/04/JOYHON_LOGO-1125x1125_fin.jpg',
                title: 'JOYHON',
                details1: 'Client : FAST RETAILING CO., LTD.',
                details2: 'Total creative direction・Design supervision : Kashiwa Sato',
                details3:
                    'Lead Architect・Architectural Design・Sustainable Design : TAKENAKA CORPORATION',
                details4: 'Interior Design : TAKENAKA CORPORATION / NOMURA'
            },
            {
                imgurl: 'https://kashiwasato.com/cms/wp-content/uploads/2023/05/ABURAYAMA_Thum.jpg',
                title: 'ABURAYAMA FUKUOKA',
                details1: 'Client : FAST RETAILING CO., LTD.',
                details2: 'Total creative direction・Design supervision : Kashiwa Sato',
                details3:
                    'Lead Architect・Architectural Design・Sustainable Design : TAKENAKA CORPORATION',
                details4: 'Interior Design : TAKENAKA CORPORATION / NOMURA'
            },
            {
                imgurl: 'https://kashiwasato.com/cms/wp-content/uploads/2023/04/Callaway_03-1125x1125.jpg',
                title: 'CALLAWAY',
                details1: 'Client : FAST RETAILING CO., LTD.',
                details2: 'Total creative direction・Design supervision : Kashiwa Sato',
                details3:
                    'Lead Architect・Architectural Design・Sustainable Design : TAKENAKA CORPORATION',
                details4: 'Interior Design : TAKENAKA CORPORATION / NOMURA'
            }
        ])
    }
    return (
        <div className="container-fluid ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 px-0 px-md-2 px-md-3 px-lg-4">
                {listData.map((item, index) => {
                    return (
                        <div className="col px-0 px-md-2 px-md-3 px-lg-4" key={index}>
                            <div className="mb-4">
                                <img src={item.imgurl} alt="" style={{ width: '100%' }} />
                                <p
                                    className="effect-text ps-4 ps-md-0"
                                    data-text={item.title}
                                    style={{ fontSize: 18, height: 20, marginTop: 24 }}>
                                    {item.title}
                                </p>
                                <p
                                    className="mt-4 text-999 text-ellipsis ps-4 ps-md-0"
                                    style={{ marginTop: 17 }}>
                                    {item.details1}
                                </p>
                                <p className="text-999 text-ellipsis ps-4 ps-md-0">
                                    {item.details2}
                                </p>
                                <p className="text-999 text-ellipsis ps-4 ps-md-0">
                                    {item.details3}
                                </p>
                                <p className="text-999 text-ellipsis ps-4 ps-md-0 d-none d-md-block">
                                    {item.details4}
                                </p>
                                <p className="mt-3 d-none d-md-block ps-4 ps-md-0">READ MORE +</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
