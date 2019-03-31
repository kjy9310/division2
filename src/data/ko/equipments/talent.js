const talents = {
  'Hard Hitting': {
    name: '강력한 타격',
    description: '정예 대상 데미지 : +15%',
    requirement: '',
  },
  Vital: {
    name: '활력',
    description: '생명력 : +20%',
    requirement: '',
  },
  Hardened: {
    name: '경화',
    description: '방어도 : +10%',
    requirement: '',
  },
  Insulated: {
    name: '단열',
    description: '상태이상 저항 : +10%',
    requirement: '',
  },
  Restorative: {
    name: '복원',
    description: '적 처치 시 생명력 +10% 회복',
    requirement: '',
  },
  'Self Adjusting': {
    name: '자가 조정',
    description: '방어도 재생 : +20%',
    requirement: '',
  },
  Empowered: {
    name: '강화',
    description: '스킬 파워 : +10%',
    requirement: '',
  },
  Surge: {
    name: '쇄도',
    description: '스킬 가속 : +10%',
    requirement: '',
  },
  Destructive: {
    name: '파괴',
    description: '폭발물 대미지 : +20%',
    requirement: '',
  },
  Capacitive: {
    name: '대용량',
    description: '스킬 지속시간 : +20%',
    requirement: '',
  },
  Spotter: {
    name: '감시병',
    description: '펄스에 탐지된 적에 대한 무기 대미지가 10%만큼 증가합니다.',
    requirement: '전지 5 이상',
  },
  Centered: {
    name: '중심점',
    description: '헤드샷으로 적을 처치하면 10초 동안 상태이상 효과면역',
    requirement: '방패 4 이상',
  },
  'Creeping Death': {
    name: '서서히 다가오는 죽음',
    description: '상태이상 효과가 10M 내에 있는 제일 가까운 적에게도 전파됩니다. 15초에 1번씩만 발동',
    requirement: '조준경 4 이하',
  },
  Trauma: {
    name: '트라우마',
    description: '헤드 적중시 15% 확률로 시력상실 효과적용 (3초) 15s cooldown in PVP',
    requirement: '소총, 지정사수소총 무기 사용',
  },
  'Dialed In': {
    name: '정신집중',
    description: '조준시 무기 명중률의 25%만큼 무기의 안정성 상승 (5초)',
    requirement: '',
  },
  Beserk: {
    name: '광분',
    description: '최대 방어도가 10% 소진될 때 마다 무기 대미지가 10%만큼 증가합니다.',
    requirement: '산탄총, 기관단총, 돌격소총 전용',
  },
  Bloodsucker: {
    name: '흡혈귀',
    description: '적의 방어도를 소진시키면 20초 동안 보너스 방어도를 +20%만큼 얻습니다. 최대 5번 중첩됩니다.',
    requirement: '방패 7 이상',
  },
  'Unstoppable Force': {
    name: '무적의 부대',
    description: '적을 처치하면 최대방어도 10000마다 무기 대미지가 2%만큼 증가합니다 (10초)',
    requirement: '방패 7 이상',
  },
  Grenadier: {
    name: '작약',
    description: '적의 자산을 파괴하면 15초동안 폭발물 대미지가 50%만큼 증가합니다. 모든 저항 50%증가 (15초)',
    requirement: '4 or less Defense',
  },
  Unbreakable: {
    name: '파괴 불가',
    description: '방어도가 소진될 시 방어도의 25%만큼 회복됩니다. 또한 다음 5초내로 방어구 키트를 사용해도 소모되지 않습니다. (60초쿨)',
    requirement: '방어구 키트에 영향을 주는 다른 활성화된 특수효과가 없어야 함',
  },
  'Mad Bomber': {
    name: '폭탄광',
    description: '수류탄 반경이 150%만큼 넓어지고 수류탄으로 적을 처치하면 소모한 수류탄 회복',
    requirement: '전지 4 이하',
  },
  Safeguard: {
    name: '안전장치',
    description: '대상을 처치하면 20초동안 수리 및 치유효과가 150%만큼 증가합니다.',
    requirement: '조준경 5 이하',
  },
  Efficient: {
    name: '능률',
    description: '방어구 키트 사용 시 50%확률로 방어구 키트가 소모되지 않습니다.',
    requirement: '방어구 키트에 영향을 주는 다른 활성화된 특수효과가 없어야 함',
  },
  'Tech Support': {
    name: '기술지원',
    description: '활성화 스킬로 적을 처치하면 10초 동안 스킬 데미지가 25%만큼 증가합니다.',
    requirement: '전지 5 이상',
  },
  Skilled: {
    name: '숙련병',
    description: '스킬로 적을 처치하면 25%확률로 스킬 재사용 대기시간이 초기화 됩니다.',
    requirement: '전지 4 이상',
  },
  'On the Ropes': {
    name: '절체절명',
    description: '모든 스킬이 재사용 대기시간 또는 횟수가 소진된 상태일 때 무기 대미지가 25%만큼 증가합니다.',
    requirement: '전지 7 이상',
  },
  Wicked: {
    name: '사악함',
    description: 'CC걸린 적에게 무기 데미지 10% 증가',
    requirement: '조준경 4 이상',
  },
  Obliterate: {
    name: '말소',
    description: '적 방어구를 파괴할 경우 5초동안 치명타 데미지가 25%만큼 증가',
    requirement: '조준경 4 이상',
  },
  Opportunistic: {
    name: '기회주의',
    description: '적의 약점 또는 방어구를 파괴하면 20초동안 해당 적이 받는 모든 데미지를 +10%만큼 증가시킵니다.',
    requirement: '지정사수소총, 산탄총 무기 전용',
  },
  Compensated: {
    name: '보정',
    description: '치명타 확률이 낮으면(20%이하) 무기 데미지가 증가(15%)합니다.',
    requirement: '조준경 3 이하',
  },
  Clutch: {
    name: '클러치',
    description: '치명타 적중 시 생명력이 15%만큼, 방어도가 2%만큼 회복됩니다.',
    requirement: '돌격소총/기관단총/경기관총 사용 중',
  },
  Terminate: {
    name: '박멸',
    description: '적의 방어도를 소진시키면 15초동안 스킬 대미지가 35%만큼 증가합니다.',
    requirement: '전지 5 이상',
  },
  'To Order': {
    name: '맞춤 주문',
    description: '발사 버튼을 길게 눌러 수류탄이 터지는 시간을 "조절"하여 수류탄이 더 일찍 터지게 할 수 있습니다.',
    requirement: '',
  },
  'Knee Cap': {
    name: '슬개골',
    description: '적의 다리를 사격하면 10%확률로 출혈 상태이상 효과를 적용합니다.',
    requirement: '전지 4 이하',
  },
  Devastating: {
    name: '분쇄',
    description: '무기 대미지 +5%',
    requirement: '',
  },
  Precise: {
    name: '정확성',
    description: '헤드샷 데미지 : +15%',
    requirement: '',
  },
  Surgical: {
    name: '정밀',
    description: '치명타 확률 +8%',
    requirement: '',
  },
  Critical: {
    name: '치명',
    description: '치명타 데미지 : +8%',
    requirement: '',
  },
  Reassigned: {
    name: '재배치',
    description: '상태이상 효과가 적용된 적을 처치하면 무기에 남은 탄약을 무작위 특수 탄약으로 3초간 변경합니다. 45초에 1번씩만 발동',
    requirement: '',
  },
  Gunslinger: {
    name: 'Gunslinger',
    description: 'Swapping to your Sidearm within 3 seconds of a kill increases Weapon damage by 20% for the entire magazine of the sidearm. Buff is lost on weapon swap or when the player exits combat.',
    requirement: '5 or less Defense',
  },
  Blacksmith: {
    name: '대장장이',
    description: '보조무기로 적을 처치하면 방어도가 25%만큼 회복, 10초에 1번씩만 발동',
    requirement: '방패 5 이상',
  },
  Bloodlust: {
    name: '살인충동',
    description: '적을 처치하고 3초내로 무기를 교체하면 10초동안 무기 데미지가 +25%만큼 증가합니다',
    requirement: '방패 4 이하',
  },
  'Filler Up': {
    name: '완전충전',
    description: '빈 탄창을 재장전하면 모든 무기가 재장전됩니다.',
    requirement: '',
  },
  Patience: {
    name: '인내심',
    description: '3초 이상 엄폐상태를 유지하면 1초마다 방어도가 5%만큼 회복됩니다. 엄폐상태 해지시 회복정지',
    requirement: '방패 7 이상',
  },
  Entrench: {
    name: '참호 파기',
    description: '엄폐한 상태에서 헤드샷을 적중시키면 방어도가 5% 회복됩니다.',
    requirement: '소총, 지정사수소총 무기 사용',
  },
  Calculated: {
    name: '용의주도',
    description: '엄폐한 상태에서 적을 처치하면 스킬 재사용 대기시간이 20%만큼 감소합니다.',
    requirement: '전지 7 이상',
  },
  Braced: {
    name: '지지대',
    description: '엄폐한 상태일 때 무기 조작력이 25%만큼 증가합니다. 엄폐상태 해지시 버프해지',
    requirement: '',
  },
  Cloaked: {
    name: '은폐',
    description: '방어구가 파괴되면 적 스킬(10m이내)에 추적당하지 않게(10초간) 됩니다. (쿨 30초)',
    requirement: '전지 5 이하',
  },
};

export default talents;
