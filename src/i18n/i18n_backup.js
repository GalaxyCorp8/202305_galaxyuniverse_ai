import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getCurrentLanguage } from '../helpers/storage'

const resources = {
	ko: {
		translation: {
			cmp1: '메타버스 AI 아바타 포탈 기업',
			cmp1_1:
				'갤럭시코퍼레이션은 가상과 현실을 공존시켜, 인류의 삶을 더 행복하고 이롭게 재창조하는 메타버스 AI 아바타 포탈 기업입니다.',
			cmp1_2:
				'전 세계의 메타버스를 넘나들며 자사의 무한한 메타버스 콘텐츠, 플랫폼, 비즈니스 등을 통해 전세계 70억명 인구가 다양한 아바타로 공생하는 신인류의 세상을 창조하여 인류의 행복한 삶에 기여합니다. 전 세계의 메타버스를 넘나들며 자사의 무한한 메타버스 콘텐츠, 플랫폼, 비즈니스 등을 통해 전세계 70억명 인구가 다양한 아바타로 공생하는 신인류의 세상을 창조하여 인류의 행복한 삶에 기여합니다.',
			cmp1_3:
				'우리는 글로벌 메타버스 아바타 포탈 기업으로 미래 산업의 비즈니스에 혁신하며, 무한한 IP를 기반으로 글로벌 최고의 메타버스 AI 아바타 포탈 기업을 지향합니다. 이를 통해 인류의 삶의 긍정적인 영향을 끼치며 다양한 꿈을 실현시키는 메타버스 AI 아바타 포탈 기업으로서의 역할을 수행하고 노력합니다.',
			cmp1_4:
				'아티스트를 비롯한 다양한 전문가들의 IP을 활용하여, 양질의 갤럭시 아바타와 갤럭시 미리내 세계관을 만들어갑니다. 이를 바탕으로 IP 매니지먼트, 콘텐츠 제작, 버추얼 휴먼, 커머스, ESG 등 다양한 비즈니스 분야에서 활동하며, 메타버스 A to Z를 통합한 메타버스 포털 기업으로 성장하고 있습니다.',
			cmp1_5: '넷플릭스 예능 시청시간 글로벌1위 피지컬:100 방영(루이웍스 미디어)',
			cmp1_6: '예능 제작사 루이웍스 미디어/WDM엔터테인먼트/루돌프 미디어 인수',
			cmp1_7:
				'메타버스 AI 음악쇼 TV조선 아바드림 방영 복싱선수 매니파퀴아오 아바타 매니지먼트 MOU 체결',
			cmp1_8: '트로트 예능 TV 조선 미스터트롯2 방영(WDM엔터테인먼트)',
			cmp1_8_1: '(주)브랑토리 인수 합병 (온라인 커머스)',
			cmp1_9: 'SK 광고 마케팅 대행 계약 체결',
			cmp1_10: '부캐릭터 기반 커머스 런칭 (GS 홈쇼핑/롯데홈쇼핑)',
			cmp1_11:
				'한국투자, KB인베스트먼트, 키움인베스트번트, P&I인베스트먼트, T인베스트먼트, ATU 파트너스 등 Series A 투자유치',
			cmp1_12: '카이스트 메타버스 전문가 양성 프로그램 공동 개설',
			cmp1_13: '골프예능 백돌이 대탈출 방영',
			cmp1_14: '신한금융지주 투자 유치',
			cmp1_15: '㈜페르소나스페이스 법인 설립 (메타버스 콘텐츠 스튜디오)',
			cmp1_16: '㈜ 메타플래닛 설립 (메타버스 공간 개발사 올림플래닛 합작법인)',
			cmp1_16_1: '㈜메타사운드 설립(AI 보이스 미디어젠 합작법인)',
			cmp1_16_2: '메타버스 아바타쇼 TV조선 부캐전성시대 방영',
			cmp1_17: '갤럭시코퍼레이션 법인설립',
			cmp1_18: '㈜주피터엔터테인먼트 법인 자회사 인수 (가수/배우 매니지먼트)',
			cmp1_19: '티인베스트먼트, 신송지티아이 SEED 투자유치',
			cmp1_20:
				'㈜페르소나유니버스 법인 설립 (CJ EnM SPC) 부캐 오디션 예능 Mnet 부캐선발대회 방영',
			cmp1_21: '㈜빅플래쉬 법인 자회사 인수 (마케팅/광고대행)',
			cmp1_22: '㈜유라보레이션 법인 자회사 인수 (유튜브 콘텐츠 스튜디오)',
			biz1:
				'갤럭시코퍼레이션은 국내 최초 메타버스 AI 아바타 포탈 기업입니다. 현실과 가상의 조화를 통한 ‘행복’을 최우선 가치로 두고 메타버스 FIRST MOVER로서 IP, 컨텐츠, 커머스, 테크를 메타버스 아바타와 융복합하여 비즈니스를 진행하고 있습니다.',
			ava1_1: '무환 확장되는 갤럭시 IP',
			ava1_2:
				'갤럭시코퍼레이션은 연예인의 메타버스 아바타를 만들고 다양한 영역의 멀티버스 IP로 확장합니다. 80여팀의 셀럽,연예인과의 협업 경험을 통해 국내 최대/최다의 아바타 IP 사업 노하우 및 포트폴리오를 보유하고 있습니다',
			ava1_3: '무한 확장되는 갤럭시 멀티 메타버스 세계관',
			ava1_4:
				'미리내 세상은 빛을 통한 현실의 세계 Light on와 빛이 사라질 때 보이는 가상 세계 Balck on로 나뉩니다. 현실 세계의 우리는 수많은 찰나의 선에 따라 삶이 흘러갑니다. 순간과 선택의 순간이 교차되는 교차점이 현재 모습을 이루고 수많은 순간 중 꿈을 상상하는 순간 내가 상상하는 꿈이 실현됩니다. ',
			ava1_5:
				'AVA는 현실의 꿈을 실현시켜 다양한 꿈을 경험하고 현실과 미래를 초연결 시키는 갤럭시의 핵심 가치입니다. 갤럭시는 다양한 꿈을 AVA를 통해 실현하고 더 큰 세상과 더 많은 사람들을 연결해 일상에 새로운 경험을 넘어 꿈과 희망의 메시지로 세상을 변화시키시 위해 노력하고 있습니다.',
			ava1_6: '갤럭시코퍼레이션의 아티스트와 전문가들',
			ava1_7:
				'갤럭시코퍼레이션은 무한 잠재력이 있는 다양한 아티스트와 전문가들을 끊임없이 발굴하여 갤럭시 메타버스 사업에 호환이 잘 될 수 있도록 교감하여 매니지먼트를 지속 연계하고 있습니다. 갤럭시 휴먼은 국내 최초 글로벌 메타버스 크리에이터로 더 큰 세상과 무한한 가능성으로 함께 성장할 수 있습니다. 갤럭시는 성장 가능한 다양한 오리진 크리에이터를 지향하고 지원합니다.',
			media1_1: '미디어 콘텐츠',
			media1_2:
				'국내 주요 예능, 버라이어티 제작 스튜디오를 M&A 하여 국내/글로벌 화제성 Top 수준의 국내 최대 제작 규모를 보유하고 있습니다.',
			media1_3:
				'갤럭시의 메타버스 콘텐츠들은 갤럭시 미리내 세계관과 초연결되어 무한한 메타버스 이야기로 재미와 즐거움을 선사하며 잠재되어있던 꿈을 깨워줍니다.',
			media1_4: '메타버스 AI 음악쇼',
			media1_5:
				'국내, 글로벌에서 가장 화제가 되고 있는 콘텐츠를 제작하는 스튜디오로 TV, 온라인플랫폼, OTT 등 다양한 채널 별 포트폴리오와 노하우를 갖춘 스튜디오입니다.',
			media1_6: '예능콘텐츠 전문 스튜디오',
			cms1_1: '현실과 가상이 공존하는 무한 커머스',
			cms1_2:
				'기존 온라인 커머스를 기반으로 메타버스와 연동된 상품을 판매함으로써 새로운 수익 모델을 창출하고 고객과 브랜드 간의 특별한  사용자 경험을 제공합니다.',
			cms1_3: '커머스 산업의 새로운 패러다임',
			cms1_4:
				'갤럭시코퍼레이션은 기존의 이커머스 산업에서의 한계를 극복하기 위해, 새로운 유통 채널과 혁신적인 방법을 도입하여 메타버스에서의 새로운 패러다임을 제시하고 있습니다. 이를 통해,  기존 이커머스 산업에서 발생하던 문제들을 해결하고, 더욱 더 효율적이고 편리한 구매 경험을 제공하고자 노력하고 있습니다.',
			cms1_5: '커머스 올인원',
			cms1_6:
				'다년간 축적된 노하우를 기반으로 커머스 브랜딩, 서비스, 디자인 그리고 마케팅까지 온·오프라인을 아우르는 이커머스 관련 제반 업무를 제공합니다.',
			cms1_7: '입점채널',
			tech1_1: '갤럭시 메타버스 테크',
			tech1_2:
				'다양한 형태의 아바타를 제작하기 위한 기술과 제작 기준을 정의하고 있으며, 이를 다양한 플랫폼에서 사용 가능하도록 최적화하는 기술을 지원합니다.',
			tech1_3: '아바타 제작',
			tech1_4:
				'갤럭시코퍼레이션은 다양한 플랫폼과 콘텐츠에 맞는 아바타를 만들기 위해, 아바타와 인간의 유사성 정도에 따라 5%부터 90%까지의 정의에 따라 아바타 제작 기술을 보유하고있습니다.',
			tech1_4_1:
				'이러한 아바타 제작 기술은 다양한 콘텐츠와 플랫폼에서 고객들이 보다 현실적이고 개인화된 경험을 누릴 수 있도록 도와줍니다.',
			tech1_4_2:
				'5% 유사성의 경우는 비교적 단순한 그래픽과 적은 정보만으로 아바타를 만들어낼 수 있는 기술이며, 90% 유사성의 경우는 더욱 현실적이고 세밀한 디자인 기술을 사용하여 인간과 아바타 사이의 차이를 최소화합니다.',
			tech1_5:
				'우리는 다양한 디지털 플랫폼에서 정보와 콘텐츠를 소비하며 시간을 보내고 있습니다. 하지만 각각의 플랫폼에서는 아바타를 새로 만들어야 하기 때문에, 사용자들은 번거로움과 시간 낭비를 겪게 됩니다.',
			test1_5_1:
				'또한, 각각의 플랫폼에서는 아바타의 기능이 제한적이기 때문에, 사용자들은 다양한 플랫폼에서도 동일한 경험을 누리기 어렵습니다.',
			test1_5_2:
				'때문에 갤럭시코퍼레이션의 목표는 “하나의 아바타로 멀티 플랫폼을 체험하는 서비스”를 제공함으로 사용자들이 다양한 플랫폼에서도 일관된 아바타를 사용할 수 있도록 하는 것 입니다.',
			care1_1: '갤럭시안이 함께하는 조직 문화',
			care1_2: '인재상',
			care1_3: '탐험',
			care1_4: '열정과 호기심으로 무한 세상을 탐험하는 인재',
			care1_5: '실행',
			care1_6: '불가능을 창의적 도전으로 실행하는 인재',
			care1_7: '행복',
			care1_8: '선한 마음으로 세상을 행복하게 지어가는 인재',
			care1_9: '문화',
			care1_10: '자유롭게 의견을 제시하고, 서로를 존중하는 수평적인 소통 문화',
			care1_10_1: '개개인이 아닌 팀워크로 업무를 하고 성과를 달성하는 조직',
			care1_10_2:
				'단체 활동을 통해 팀워크를 향상시킬 수 있도록 분기별 워크샵 운영',
			care1_10_3: '회사에서 추진하는 프로젝트를 전 임직원이 공유하는 문화',
			care1_10_4: '신나는 음악과 함께하는 즐거운 사무공간',
			care1_11: '복리후생',
			care1_12: '경조사지원',
			care1_13:
				'구성원들의 경조사에 축하와 조의를 담아 휴가와 비용, 용품을 지원합니다. ',
			care1_14: '기념일선물',
			care1_15: '기념일 마다 감사한 마음을 담아 선물을 제공합니다.',
			care1_16: '가족사랑지원',
			care1_17: '엄마, 아빠가 되고싶은 구성원들에게 휴가와 비용을 지원합니다.',
			care1_18: '문화생활지원',
			care1_19:
				'즐거운 문화생활을 위해 영화, 뮤지컬, 운동경기 등 단체 관람을 지원합니다.',
			care1_20: '음료&스낵바',
			care1_21: '구성원들이 출출하지 않도록 스낵과 음료를 제공하고 있습니다.',
			care1_22: '근무장비지원',
			care1_23: '직무별 최적화된 장비와 소프트웨어를 제공하고 있습니다.',
			care1_24: '동호회',
			care1_25:
				'구성원들의 취미활동과 상호 친목도모를 위해 사내동호회를 운영하고 있습니다.',
			care1_26: '단체상해보험',
			care1_27:
				'구성원들의 의료비 부담을 줄이고자, 보장성 보험료와 실손의료비를 지원해드립니다.',
			care1_28: '종합건강검진',
			care1_29:
				'구성원의 건강을 위해 매년 1회 무료로 검사하고, 휴가도 제공합니다.',
			care1_30: '마인드케어',
			care1_31:
				'부정적인 마음 상태를 긍정적으로 회복할 수 있도록 전문 상담을 지원하고 있습니다.',
			care1_32: '채용절차',
			news1: '갤럭시 뉴스',
			news2: '보도자료',
			news3: '갤럭시코퍼레이션, ‘규제혁신대상 중기부 장관상’ 수상 영예',
			news4: '"아바드림", 꿈과 희망 전한다. "특별 관전 포인트" 셋',
			news5: '언론',
			news11: '갤럭시 뉴스',
			news12: '보도자료',
			news13: '갤럭시코퍼레이션, ‘규제혁신대상 중기부 장관상’ 수상 영예',
			news14: '발행일 : 2022.12.20',
			news14_1: '매일안전신문',
			news15: '출처 : 매일안전신문(https://idsn.co.kr)',
			news16:
				'갤럭시코퍼레이션이 한국발 아바타 열풍에 일조한 것으로 인정받았다.<br /><br />갤럭시코퍼레이션은 지난 19일 서울시 여의도 중소기업중앙회에서 개최된 ‘2022 대한민국 중소기업 규제혁신 대상’에서 ‘중소벤처기업부 장관상’을 수상했다고 밝혔다.<br /><br />이번 시상은 올해 규제혁신에 앞장선 유공자 등의 성과를 격려하기 위해 마련된 것이다. 규제혁신과 적극행정을 펼친 우수 공무원, 공공기관·단체 관계자 54명과 사회공헌·지역발전 등에 앞장선 중소기업인 21명 등 총 75명이 수상했다.<br /><br />갤럭시코퍼레이션은 한국남동발전과 강원랜드와 함께 중소벤처기업부 장관상(장관 이영)을 수상하는 영예를 안았다.<br /><br />㈜갤럭시코퍼레이션은 메타버스 퍼스트무버 기업으로 국내외 아티스트 아바타(AVA) IP 200개 이상을 보유하고 이를 메타버스 아바타로 활용하고 있는 국내 최초의 메타버스 아바타 포탈 플랫폼 기업이기도 하다.<br /><br />앞으로 디즈니 마블처럼 고유의 메타버스 세계관을 구축하여 메타버스 아바타 기반의 방송, 음원, 커머스, 콘서트 등 메타버스의 A-Z 포탈 전략을 선보일 예정이다.<br /><br />최근에는 TV조선 메타버스 AI음악쇼 ‘아바드림’을 선보여 화제를 모으기도 했다. 특히 듀스의 故 김성재, 배우 故 김자옥, 가수 故서지원 등 하늘의 별이 된 스타들을 아바타로 만날 수 있는 ‘트리뷰트’ 무대가 특별한 감동을 안겼으며, 영화 ‘아바타2’ 개봉과 맞물리면서 2022 하반기 메타버스와 아바타 열풍에 일조했다는 평을 받았다.<br /><br />이외에도 KAIST 및 연세대 메타버스 최고위 과정 개설 및 운영, 항공우주연구원과 협력한 ‘누리호 및 다누리 발사’, 메타버스 생중계, 메타버스 언론미디어 ‘메타리즘’ 설립 등 콘텐츠, 교육, 미디어, 우주산업 등 다방면으로 메타버스 산업 전반을 아우르며 활동 중이다.<br /><br />갤럭시코퍼레이션 최용호 최고행복책임자는 “장관상을 수상하게 되어 영광”이라며 “내년을 목표로 코스닥 상장을 추진하는 등 전 세계 메타버스 업계가 함께 성장할 수 있도록 매진할 것”이라고 소감을 말했다.',
			invest1: '갤럭시 IR',
			invest2: '자료실',
			invest3: '재무정보',
			invest4: '공시정보',
			invest5: '공고',
			invest6: '2022 2분기 실적보고서',
		},
	},
	en: {
		translation: {
			cmp1: 'Metaverse AI avatar portal company',
			cmp1_1:
				'Galaxy Corporation makes the lives of mankind coexist with virtual reality. It is a metaverse AI avatar portal company that recreates happier and more beneficially.',
			cmp1_2:
				'Crossing the metaverse around the world, we contribute to the happy life of mankind by creating a new world where 7 billion people around the world coexist with various avatars through our infinite metaverse contents, platforms, and businesses. Crossing the metaverse around the world, we contribute to the happy life of mankind by creating a new world where 7 billion people around the world coexist with various avatars through our infinite metaverse contents, platforms, and businesses.',
			cmp1_3:
				'As a global metaverse avatar portal company, we innovate in the business of the future industry and aim to become the world`s best metaverse AI avatar portal company based on infinite IP. Through this, we strive to play a role as a metabus AI avatar portal company that has a positive impact on human life and realizes various dreams.',
			cmp1_4:
				'Using the IP of various experts, including artists, we are creating high-quality Galaxy Avatar and Galaxy Mirinae worldviews. Based on this, it is active in various business fields such as IP management, content production, virtual human, commerce, and ESG, and is growing into a metaverse portal company that integrates metaverse A to Z.',
			cmp1_5:
				'Global 1st place in Netflix entertainment viewing time Physical: 100 Aired (Louiworks Media)',
			cmp1_6:
				'Acquisition of entertainment production company Louis Works Media/WDM Entertainment/Rudolph Media',
			cmp1_7:
				'Broadcasting of Metaverse AI music show TV Chosun Ava Dream Boxer Manny Pacquiao Avatar Management MOU signed',
			cmp1_8: 'Trot entertainment TV Chosun Mr. Trot 2 aired (WDM Entertainment)',
			cmp1_8_1: 'Acquisition of Brantory Co., Ltd. (online commerce)',
			cmp1_9: 'Signed SK advertising marketing agency contract',
			cmp1_10:
				'Commerce launch based on sub-characters (GS Home Shopping/Lotte Home Shopping)',
			cmp1_11:
				'Attracted Series A investments from Korea Investment, KB Investment, Kiwoom Investment, P&I Investment, T Investment, and ATU Partners',
			cmp1_12: 'Jointly opened KAIST Metaverse Expert Training Program',
			cmp1_13: 'Aired on the golf variety show Baekdol`s Great Escape',
			cmp1_14: 'Attracted investment from Shinhan Financial Group',
			cmp1_15: 'Established Persona Space Co., Ltd. (Metaverse Content Studio)',
			cmp1_16:
				'Established Meta Planet Co., Ltd. (joint venture with Olim Planet, a developer of metaverse space)',
			cmp1_16_1:
				'Established Metasound Co., Ltd. (AI Voice Mediagen joint venture)',
			cmp1_16_2: 'Broadcasting of Metaverse Avatar Show TV Chosun Bukkae Heyday',
			cmp1_17: 'Establishment of Galaxy Corporation',
			cmp1_18:
				'Acquisition of a subsidiary of Jupiter Entertainment Co., Ltd. (Singer/Actor Management)',
			cmp1_19: 'TINVESTMENT, SEED Attracts Investment In SINGSONG GTI Co.,Ltd',
			cmp1_20:
				'Persona Universe Co., Ltd. Establishment (CJ EnM SPC) broadcast sub-character Audition "sub-character Contest" in MNET',
			cmp1_21:
				'Acquisition of a subsidiary of Big Flash Corporation (Marketing/Advertising Agency)',
			cmp1_22:
				'Acquisition of a subsidiary of Euraboration Co., Ltd. (YouTube Content Studio)',
			biz1:
				'Galaxy Corporation is the first metabus AI avatar portal company in Korea. As a metaverse FIRST MOVER, with ‘happiness’ as the top priority through harmony between reality and virtual reality We are conducting business by converging IP, content, commerce, and tech with metaverse avatars.',
			ava1_1: 'Galaxy IP expands seamlessly',
			ava1_2:
				'Galaxy Corporation creates metaverse avatars for celebrities Expands to multi-bus IP in various areas. Through the experience of collaboration with 80 teams of celebrities and celebrities, We have the largest/largest Avatar IP business know-how and portfolio in Korea',
			ava1_3: 'Infinitely Expanding Galaxy Multi-Metaverse World View',
			ava1_4:
				'The world within the Milky Way is divided into the real world Light on through light and the virtual world Balck on when the light disappears. In the real world, our lives flow along countless fleeting lines. The intersection where the moment and the moment of choice intersect The moment I become what I am and imagine my dream among countless moments, the dream I imagine will come true.',
			ava1_5:
				'AVA is the core value of Galaxy that realizes dreams in reality, experiences various dreams, and hyperconnects reality and future. Galaxy strives to realize various dreams through AVA and connect more people to a larger world to change the world with messages of dreams and hope beyond new experiences in everyday life.',
			ava1_6: 'Artists and experts of Galaxy Corporation',
			ava1_7:
				'Galaxy Corporation is constantly discovering various artists and experts with infinite potential. We communicate and continue to connect management to ensure compatibility with the Galaxy Metaverse business. Galaxy Human is the first global metaverse creator in Korea to grow together with a bigger world and infinite possibilities. Galaxy aims and supports various origin creators who can grow.',
			media1_1: 'Media Content',
			media1_2:
				'By M&A of major entertainment and variety production studios in Korea, it has the largest production scale in Korea at the top level of domestic/global popularity.',
			media1_3:
				'Galaxy`s metaverse contents of Galaxy is connected to the world and wake up the dreams of infinite meta bus story, and wake up with infinite metadata stories.',
			media1_4: 'Metaverse AI Music Show',
			media1_5:
				'It is a studio that produces the most popular content in Korea and around the world, and it is a studio with various channel portfolios and know-how such as TV, online platform, and OTT.',
			media1_6: 'A studio specializing in entertainment contents',
			cms1_1: 'Infinite commerce where reality and virtual coexist',
			cms1_2:
				'It creates a new revenue model and provides a special user experience between customers and brands by selling products linked to metaverse based on existing online commerce.',
			cms1_3: 'A New Paradigm for the Commerce Industry',
			cms1_4:
				'To overcome the limitations of the existing e-commerce industry, Galaxy Corporation is presenting a new paradigm in the metaverse by introducing new distribution channels and innovative methods. Through this, we are trying to solve problems that have occurred in the existing e-commerce industry and provide a more efficient and convenient purchasing experience.',
			cms1_5: 'Commerce All-in-One',
			cms1_6:
				'"Based on years of accumulated know-how Commerce Branding, Service, Design And even marketing. It`s online and offline We provide you with e-commerce-related tasks."',
			cms1_7: 'an entry channel',
			tech1_1: 'Galaxy Metaverse Tech',
			tech1_2:
				'It defines the technologies and criteria for creating different types of avatars and supports technologies that optimize them for use on different platforms.',
			tech1_3: 'Avatar production',
			tech1_4:
				'In order to create avatars that fit various platforms and contents, Galaxy Corporation has avatars production technology according to the definition of 5% to 90% depending on the degree of similarity between avatars and humans.',
			tech1_4_1:
				'These avatar production technologies help customers enjoy a more realistic and personalized experience in a variety of content and platforms.',
			tech1_4_2:
				'The 5% similarity is a technology that can create avatars with relatively simple graphics and less information, and the 90% similarity uses more realistic and detailed design techniques to minimize the difference between humans and avatars.',
			tech1_5:
				'We spend time consuming information and content on various digital platforms. However, because each platform requires a new avatar, users experience inconvenience and waste of time.',
			test1_5_1:
				'In addition, since the functions of avatars are limited on each platform, it is difficult for users to enjoy the same experience on various platforms.',
			test1_5_2:
				'So, the goal of Galaxy Corporation is By providing a "service to experience multi-platforms with one avatar," users can use the avatar consistently on various platforms.',
			care1_1: 'The organizational culture of Galaxyien',
			care1_2: 'Type of talent',
			care1_3: 'exploration',
			care1_4: 'with passion and curiosity a man who explores the infinite world',
			care1_5: 'Practice',
			care1_6: 'Talent to execute impossible as a creative challenge',
			care1_7: 'Happiness',
			care1_8: 'With a good heart a man who builds happily',
			care1_9: 'culture',
			care1_10:
				'A horizontal culture of communication that freely expresses opinions and respects each other',
			care1_10_1:
				'Organizations that work with teamwork and achieve results, not individuals',
			care1_10_2:
				'Operate quarterly workshops to improve teamwork through group activities',
			care1_10_3:
				'A culture in which all executives and employees share projects promoted by the company',
			care1_10_4: 'a delightful office space with exciting music',
			care1_11: 'benefits',
			care1_12: 'Support for family events',
			care1_13:
				'With congratulations and condolences to the members of the family We support vacations, expenses, and supplies.',
			care1_14: 'an anniversary present',
			care1_15: 'We offer gifts with gratitude on every anniversary.',
			care1_16: 'Support for family love',
			care1_17:
				'To the members who want to be mom and dad We support your vacation and expenses.',
			care1_18: 'Support for cultural life',
			care1_19:
				'Movies, musicals, sports games, etc. for a fun cultural life We support group viewing.',
			care1_20: 'Beverage & Snack Bar',
			care1_21:
				'So that the members don`t get hungry Snacks and drinks are provided.',
			care1_22: 'Working equipment support',
			care1_23: 'We provide optimized equipment and software for each job.',
			care1_24: 'Club',
			care1_25:
				'We run an in-house club to promote members` hobbies and mutual friendship.',
			care1_26: 'group injury insurance',
			care1_27:
				'In order to reduce the burden of medical expenses for members, we provide coverage insurance premiums and medical expenses for loss.',
			care1_28: 'comprehensive medical examination',
			care1_29:
				'For the health of members, we conduct free examinations once a year and provide vacations.',
			care1_30: 'Mind care',
			care1_31:
				'We are supporting professional counseling so that you can recover your negative mental state positively.',
			care1_32: 'Recruitment procedure',
			news1: 'Galaxy News',
			news2: 'press release',
			news3:
				'Galaxy Corporation honored the "Minister of SMEs Award for Regulatory Innovation"',
			news4:
				'"Abba Dream" delivers dreams and hopes. "Special Three points to watch out for."',
			news5: 'Media',
			news11: 'Galaxy News',
			news12: 'press release',
			news13:
				'Galaxy Corporation honored the "Minister of SMEs Award for Regulatory Innovation"',
			news14: 'Publication Date: December 20, 2022',
			news14_1: 'Daily Safety Newspaper',
			news15: 'Source: Daily Safety Newspaper (https://idsn.co.kr )',
			news16:
				'Galaxy Corporation was recognized for its contribution to the avatar craze from Korea.<br /><br />Galaxy Corporation announced that it won the "Minister of Small and Medium Venture Business Award" at the "2022 Korea Small and Medium Business Regulatory Innovation Awards" held at the Yeouido Small and Medium Business Association in Seoul on the 19th.<br /><br />This award is designed to encourage the achievements of people of merit who took the lead in regulatory innovation this year. A total of 75 people won the award, including 54 outstanding public officials who carried out regulatory innovation and active administration, and 21 small and medium-sized enterprises that took the lead in social contribution and regional development.<br /><br />Galaxy Corporation was honored with the Minister of SMEs and Startups Award (Minister Lee Young) along with Korea Southeast Power Co. and Gangwon Land.<br /><br />Galaxy Corporation is a metaverse first mover company and is also the first metaverse avatar portal platform company in Korea that has more than 200 domestic and foreign artist avatar (AVA) IPs and uses them as metaverse avatars.<br /><br />In the future, like Disney Marvel, it will build its own metaverse worldview to introduce metaverse`s A-Z portal strategy such as broadcasting, sound source, commerce, and concerts based on metaverse avatar.<br /><br />Recently, he attracted attention by presenting the TV Chosun Metaverse AI music show "Avadream." In particular, the Tribute stage, where you can meet stars who have become stars in the sky as avatars such as Deuce`s late Kim Sung-jae, actor Kim Ja-ok, and singer Seo Ji-won, was particularly impressive.<br /><br />In addition, it is working throughout the metaverse industry in various fields such as content, education, media, and space, including the opening and operation of the top metaverse courses at KAIST and Yonsei University, launching "Nuri and Danuri" in cooperation with the Aerospace Research Institute.<br /><br />Choi Yong-ho, Chief Happiness Officer of Galaxy Corporation, said, "It is an honor to win the Minister`s Award," adding, "We will strive to grow the global metaverse industry together by pushing for KOSDAQ listing with the goal of next year."',
			invest1: 'Galaxy IR',
			invest2: 'reference room',
			invest3: 'Financial information',
			invest4: 'Disclosure Information',
			invest5: 'a public notice',
			invest6: 'Q2 2022 Earnings Report',
		},
	},
	jp: {
		translation: {
			cmp1: 'Metaverse AI avatar portal company',
			cmp1_1:
				'Galaxy Corporation は仮想と現実を共存させ、人類の生活を より幸せで有利に再創造するメタバスAIアバターポータル企業です。',
			cmp1_2:
				'世界中のメタバスを行き来し、その無限のメタバスコンテンツ、プラットフォーム、ビジネスなどを通じて、世界中の70億人の人口が多様なアバターに共生する新人類の世界を創造し、人類の幸せな生活に貢献します。世界中のメタバスを行き来し、その無限のメタバスコンテンツ、プラットフォーム、ビジネスなどを通じて、世界中の70億人の人口が多様なアバターに共生する新人類の世界を創造し、人類の幸せな生活に貢献します。',
			cmp1_3:
				'我々は、グローバルメタバスアバターポータル企業として将来の産業のビジネスに革新し、無限のIPに基づいて、グローバルな最高のメタバスAIアバターポータル企業を目指しています。これにより、人類の生活のプラスの影響を与え、多様な夢を実現するメタバスAIアバターポータル企業としての役割を果たし、努力します。',
			cmp1_4:
				'アーティストをはじめとする様々な専門家のIPを活用し、良質のギャラクシーアバターとギャラクシーミリ内世界観をつくります。これを基に、IPマネジメント、コンテンツ制作、バーチャルヒューマン、コマース、ESGなど様々なビジネス分野で活動し、メタバスA to Zを統合したメタバスポータル企業に成長しています。',
			cmp1_5:
				'ネットフリックスバラエティ視聴時間グローバル1位フィジカル：100放映（ルイワークスメディア）',
			cmp1_6:
				'芸能制作会社ルイワークスメディア/WDMエンターテイメント/ルドルフメディア買収',
			cmp1_7:
				'メタバスAI音楽ショーテレビ朝鮮アバドリーム放映ボクシング選手マニパキアオアバターマネジメントMOU締結',
			cmp1_8:
				'トロットバラエティテレビ朝鮮ミスタートロット2放映（WDMエンターテイメント）',
			cmp1_8_1: '(株)ブラントリ買収合併(オンラインコマース)',
			cmp1_9: 'SK広告マーケティング代行契約締結',
			cmp1_10:
				'副キャラクターベースのコマース発売（GSホームショッピング/ロッテホームショッピング）',
			cmp1_11:
				'韓国投資、KBインベストメント、キウムインベストバント、P&Iインベストメント、Tインベストメント、ATUパートナーズなどSeries A投資誘致',
			cmp1_12: 'カイストメタバス専門家養成プログラム共同開設',
			cmp1_13: 'ゴルフ芸能白石が大脱出放映',
			cmp1_14: '新韓金融持株投資誘致',
			cmp1_15: '㈱ペルソナスペース法人設立（メタバスコンテンツスタジオ）',
			cmp1_16:
				'（株）メタプラネット設立（メタバス空間開発会社オリンプラネット合弁法人）',
			cmp1_16_1: '(株)メタサウンド設立(AIボイスメディアジェン合弁法人)',
			cmp1_16_2: 'メタバスアバターショーテレビ朝鮮副キャッスル時代放映',
			cmp1_17: 'ギャラクシーコーポレーション法人設立',
			cmp1_18:
				'(株)ジュピターエンターテインメント法人の子会社買収(歌手/俳優マネジメント)',
			cmp1_19: 'ティーインベストメント、シンソンジーティーアイSEED 投資誘致',
			cmp1_20:
				'(株)ペルソナユニバース法人設立(CJ EnMSPC)サブキャラオーディション芸能Mnetサブキャラ選抜大会放映',
			cmp1_21: '(株)ビッグフラッシュ法人の子会社買収(マーケティング/広告代行)',
			cmp1_22: '(株)ユーラボ法人の子会社を買収(ユーチューブコンテンツスタジオ)',
			biz1:
				'Galaxy Corporationは、国内初のメタバスAIアバターポータル企業です。 現実と仮想の調和を通じた「幸せ」を最優先価値として、メタバスFIRST MOVERとしてIP、コンテンツ、コマース、テクをメタバスアバターと融合してビジネスを進めています。',
			ava1_1: '無環の拡張ギャラクシーIP',
			ava1_2:
				'Galaxy Corporationは有名人のメタバスアバターを作成し、さまざまなゾーンのマルチバスIPに拡張します。 80チームのセレブ、芸能人とのコラボレーション経験を通じて国内最大/最多のアバターIP事業ノウハウとポートフォリオを保有しています',
			ava1_3: '無限拡張ギャラクシーマルチメタバス世界観',
			ava1_4:
				'ミリ内の世界は、光を通じた現実の世界Light onと光が消えたときに見える仮想世界 Balck onに分かれています。 現実世界の私たちは、多くの刹那のラインに沿って人生が流れています。瞬間と選択の瞬間が交差する交差点現在の姿を成し遂げ、数多くの瞬間の中で夢を想像する瞬間、私が想像する夢が実現します。',
			ava1_5:
				'AVAは、現実の夢を実現させ、多様な夢を経験し、現実と未来を超連結させるギャラクシーの核心価値です。 ギャラクシーは、様々な夢をAVAを通じて実現し、より大きな世界とより多くの人々をつなげ、日常の新しい経験を超えて、夢と希望のメッセージで世界を変化させるために努力しています。',
			ava1_6: 'Galaxy Corporationのアーティストと専門家',
			ava1_7:
				'Galaxy Corporationは、無限の可能性を持つさまざまなアーティストや専門家を絶えず発掘し、ギャラクシーメタバス事業に互換性があるように交感し、マネジメントを継続的に連携しています。 ギャラクシーヒューマンは国内初のグローバルメタバスクリエイターで、より大きな世界と無限の可能性で一緒に成長することができます。 ギャラクシーは、成長可能なさまざまなオリジンクリエイターを目指してサポートしています。',
			media1_1: 'メディアコンテンツ',
			media1_2:
				'国内主要芸能、バラエティ制作スタジオをM&Aし、国内/グローバル話題性トップレベルの国内最大の制作規模を保有しています。',
			media1_3:
				'ギャラクシーのメタバースコンテンツは、ギャラクシーミリネの世界観と超連結され、無限のメタバース物語で楽しさと楽しさを与え、潜在していた夢を覚ましてくれます。',
			media1_4: 'メタバースAI音楽ショー',
			media1_5:
				'国内、グローバルで最も話題になっているコンテンツを制作するスタジオで、テレビ、オンラインプラットフォーム、OTTなど多様なチャンネル別ポートフォリオとノウハウを備えたスタジオです。',
			media1_6: '芸能コンテンツ専門スタジオ',
			cms1_1: '現実と仮想が共存する無限コマース',
			cms1_2:
				'既存のオンラインコマースを基盤にメタバースと連動した商品を販売することで、新しい収益モデルを創出し、顧客とブランド間の特別なユーザーエクスペリエンスを提供します。',
			cms1_3: 'コマース産業の新しいパラダイム',
			cms1_4:
				'ギャラクシーコーポレーションは既存のEコマース産業での限界を克服するために、新しい流通チャンネルと革新的な方法を導入し、メタバスでの新しいパラダイムを提示しています。 これにより、既存のEコマース産業で発生した問題を解決し、より効率的で便利な購買経験を提供するために努力しています。',
			cms1_5: 'コマース·オールインワン',
			cms1_6:
				'「長年蓄積されたノウハウを基にコマースブランディング、サービス、デザインそしてマーケティングまでオン·オフラインを網羅したEコマース関連の諸業務を提供します。」',
			cms1_7: '入店チャンネル',
			tech1_1: 'ギャラクシーメタバーステック',
			tech1_2:
				'多様な形態のアバターを製作するための技術と製作基準を定義しており、これを多様なプラットフォームで使用できるよう最適化する技術を支援します。',
			tech1_3: 'アバター製作',
			tech1_4:
				'ギャラクシーコーポレーションは多様なプラットフォームとコンテンツに合う アバターを作るため、アバターと人間の類似性の程度によって5%から90%までの定義に従ってアバター製作技術を保有しています。',
			tech1_4_1:
				'このようなアバター製作技術は、多様なコンテンツとプラットフォームで 顧客がより現実的でパーソナライズされた経験を享受できるようにサポートします。',
			tech1_4_2:
				'5%類似性の場合は比較的単純なグラフィックと少ない情報だけでアバター を作り出すことができる技術であり、 90%類似性の場合はより現実的で細かいデザイン技術を使用 して人間とアバターの差を最小限に抑えます。」',
			tech1_5:
				'私たちはさまざまなデジタル プラットフォームで情報やコンテンツを消費して時間を過ごしています。',
			test1_5_1:
				'しかし、それぞれのプラットフォームではアバターを新たに作成する必要があるため、 ユーザーは煩わしさと時間の無駄を経験します。 また、各プラットフォームではアバターの機能が制限されているため、 ユーザーはさまざまなプラットフォームでも同じ経験を享受することが困難です。',
			test1_5_2:
				'そのため、ギャラクシーコーポレーションの目標は「一つ のアバターでマルチプラットフォームを体験するサービス」 を提供することで、ユーザーが様々なプラットフォーム でも一貫したアバターを使用できるようにすることです。',
			care1_1: 'ギャラクシーアンが共にする組織文化',
			care1_2: '人材像',
			care1_3: '探検',
			care1_4: '情熱と好奇心で無限の世界を探検する人材',
			care1_5: '実行',
			care1_6: '不可能を創造的挑戦として実行する人材',
			care1_7: '幸福',
			care1_8: '善良な心で世の中を幸せに育てる人材',
			care1_9: '文華',
			care1_10: '自由に意見を示し、お互いを尊重する水平的なコミュニケーション文化',
			care1_10_1: '個々人ではなくチームワークで業務をして成果を達成する組織',
			care1_10_2:
				'団体活動を通じてチームワークを向上させることができるよう四半期ごとのワークショップ運営',
			care1_10_3: '会社で推進するプロジェクトを全役職員が共有する文化',
			care1_10_4: '楽しい音楽と楽しいオフィススペース',
			care1_11: '福利厚生',
			care1_12: '慶弔支援',
			care1_13:
				'構成員の慶弔事にお祝いと弔意を込めて休暇と費用、用品をサポートします。',
			care1_14: '記念日の贈り物',
			care1_15: '記念日ごとに感謝の気持ちを込めてプレゼントを提供します。',
			care1_16: '家族愛支援',
			care1_17: 'ママ、パパになりたい構成員たちへ休暇と費用を支援します。',
			care1_18: '文化生活支援',
			care1_19:
				'楽しい文化生活のために映画、ミュージカル、運動競技など団体観覧を支援します。',
			care1_20: 'ドリンク&スナックバー',
			care1_21: '構成員が小腹を空けないようにスナックや飲み物を提供しています。',
			care1_22: '勤務装備支援',
			care1_23: '職務別に最適化された装備とソフトウェアを提供しています。',
			care1_24: '同好会',
			care1_25:
				'構成員の趣味活動と相互親睦を深めるため社内同好会を運営しています。',
			care1_26: '団体傷害保険',
			care1_27:
				'構成員の医療費負担を減らすために、保障性保険料と実損医療費を支援します。',
			care1_28: '人間ドック',
			care1_29: 'メンバーの健康のために毎年1回無料で検査し、休暇も提供します。',
			care1_30: 'マインドケア',
			care1_31:
				'否定的な心の状態を肯定的に回復できるよう、専門相談を支援しています。',
			care1_32: '採用手続き',
			news1: 'ギャラクシーニュース',
			news2: '報道資料',
			news3:
				'ギャラクシーコーポレーション、「規制革新大賞中小ベンチャー企業部長官賞」受賞栄誉',
			news4: '「アバドリーム」、夢と希望を伝える。「特別観戦ポイント」3',
			news5: 'マスコミ',
			news11: 'ギャラクシーニュース',
			news12: '報道資料',
			news13:
				'ギャラクシーコーポレーション、「規制革新大賞中小ベンチャー企業部長官賞」受賞栄誉',
			news14: '発行日:2022年12月20日',
			news14_1: '毎日安全新聞',
			news15: '出典:毎日安全新聞（https://idsn.co.kr ）',
			news16:
				'ギャラクシーコーポレーションが韓国発アバター熱風に一助したことが認められた。<br /><br />ギャラクシーコーポレーションは19日、ソウル市汝矣島の中小企業中央会で開催された「2022大韓民国中小企業規制革新大賞」で「中小ベンチャー企業部長官賞」を受賞したと明らかにした。<br /><br />今回の授賞は今年、規制革新の先頭に立った有功者などの成果を激励するために設けられたものだ。 規制革新と積極行政を繰り広げた優秀公務員、公共機関·団体関係者54人と社会貢献·地域発展などに先頭に立った中小企業家21人など計75人が受賞した。<br /><br />ギャラクシーコーポレーションは、韓国南東発電と江原ランドと共に中小ベンチャー企業部長官賞（李永長官）を受賞する栄誉に輝いた。<br /><br />(株)ギャラクシーコーポレーションはメタバースファーストムーバー企業で、国内外アーティストアバター(AVA)IP200個以上を保有し、これをメタバースアバターとして活用している国内初のメタバースアバターポータルプラットフォーム企業でもある。<br /><br />今後ディズニーマーブルのように固有のメタバース世界観を構築し、メタバースアバター基盤の放送、音源、コマース、コンサートなどメタバースのA-Zポータル戦略を披露する予定だ。<br /><br />最近はTV朝鮮メタバースAI音楽ショー「アバドリーム」を披露し話題を集めたりもした。 特にデュースの故キム·ソンジェ、俳優故キム·ジャオク、歌手故ソ·ジウォンなど天の星になったスターたちにアバターとして会える「トリビュート」舞台が特別な感動を与え、映画「アバター2」封切りとかみ合って2022下半期メタバースとアバター熱風に一助したという評価を受けた。<br /><br />他にもKAISTおよび延世大学メタバース最高位課程開設および運営、航空宇宙研究院と協力した「ヌリ号およびタヌリ発射」、メタバス生中継、メタバス言論メディア「メタリズム」設立などコンテンツ、教育、メディア、宇宙産業など多方面にメタバス産業全般を合わせて活動中だ。<br /><br />ギャラクシーコーポレーションのチェ·ヨンホ最高幸福責任者は「長官賞を受賞することになり光栄」とし「来年を目標にコスダック上場を推進するなど全世界のメタバス業界が共に成長できるよう邁進する」と感想を話した。',
			invest1: 'ギャラクシーIR',
			invest2: '資料室',
			invest3: '財務情報',
			invest4: '公示情報',
			invest5: '公告',
			invest6: '2022年第2四半期実績報告書',
		},
	},
}
i18n.use(initReactI18next).init({
	resources,
	lng: getCurrentLanguage() ? getCurrentLanguage() : 'ko',
})
export default i18n
