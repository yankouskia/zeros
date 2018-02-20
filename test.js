const assert = require('assert');
Object.freeze(assert);
const getZerosCount = require('./src/index');

describe('Zeros', () => {
  it('1', () => {
    const zerosCount = getZerosCount(84583674);
    assert.equal(zerosCount, 21145911);
  });

  it('2', () => {
    const zerosCount = getZerosCount(15949280);
    assert.equal(zerosCount, 3987315);
  });

  it('3', () => {
    const zerosCount = getZerosCount(71619670);
    assert.equal(zerosCount, 17904912);
  });

  it('4', () => {
    const zerosCount = getZerosCount(58628188);
    assert.equal(zerosCount, 14657044);
  });

  it('5', () => {
    const zerosCount = getZerosCount(42075484);
    assert.equal(zerosCount, 10518864);
  });

  it('6', () => {
    const zerosCount = getZerosCount(99804940);
    assert.equal(zerosCount, 24951230);
  });

  it('7', () => {
    const zerosCount = getZerosCount(56204879);
    assert.equal(zerosCount, 14051214);
  });

  it('8', () => {
    const zerosCount = getZerosCount(53337465);
    assert.equal(zerosCount, 13334360);
  });

  it('9', () => {
    const zerosCount = getZerosCount(26336046);
    assert.equal(zerosCount, 6584006);
  });

  it('10', () => {
    const zerosCount = getZerosCount(55312027);
    assert.equal(zerosCount, 13828001);
  });

  it('11', () => {
    const zerosCount = getZerosCount(61885097);
    assert.equal(zerosCount, 15471269);
  });

  it('12', () => {
    const zerosCount = getZerosCount(77009996);
    assert.equal(zerosCount, 19252492);
  });

  it('13', () => {
    const zerosCount = getZerosCount(58132666);
    assert.equal(zerosCount, 14533161);
  });

  it('14', () => {
    const zerosCount = getZerosCount(18428866);
    assert.equal(zerosCount, 4607211);
  });

  it('15', () => {
    const zerosCount = getZerosCount(62809777);
    assert.equal(zerosCount, 15702439);
  });

  it('16', () => {
    const zerosCount = getZerosCount(13240120);
    assert.equal(zerosCount, 3310024);
  });

  it('17', () => {
    const zerosCount = getZerosCount(72865644);
    assert.equal(zerosCount, 18216406);
  });

  it('18', () => {
    const zerosCount = getZerosCount(33922967);
    assert.equal(zerosCount, 8480736);
  });

  it('19', () => {
    const zerosCount = getZerosCount(28909900);
    assert.equal(zerosCount, 7227471);
  });

  it('20', () => {
    const zerosCount = getZerosCount(31334959);
    assert.equal(zerosCount, 7833735);
  });

  it('21', () => {
    const zerosCount = getZerosCount(7722885);
    assert.equal(zerosCount, 1930716);
  });

  it('22', () => {
    const zerosCount = getZerosCount(55018505);
    assert.equal(zerosCount, 13754622);
  });

  it('23', () => {
    const zerosCount = getZerosCount(10222132);
    assert.equal(zerosCount, 2555530);
  });

  it('24', () => {
    const zerosCount = getZerosCount(81979289);
    assert.equal(zerosCount, 20494815);
  });

  it('25', () => {
    const zerosCount = getZerosCount(56571126);
    assert.equal(zerosCount, 14142776);
  });

  it('26', () => {
    const zerosCount = getZerosCount(25566571);
    assert.equal(zerosCount, 6391638);
  });

  it('27', () => {
    const zerosCount = getZerosCount(67228687);
    assert.equal(zerosCount, 16807166);
  });

  it('28', () => {
    const zerosCount = getZerosCount(82900425);
    assert.equal(zerosCount, 20725102);
  });

  it('29', () => {
    const zerosCount = getZerosCount(98648601);
    assert.equal(zerosCount, 24662145);
  });

  it('30', () => {
    const zerosCount = getZerosCount(56389386);
    assert.equal(zerosCount, 14097341);
  });

  it('31', () => {
    const zerosCount = getZerosCount(36625114);
    assert.equal(zerosCount, 9156272);
  });

  it('32', () => {
    const zerosCount = getZerosCount(88969530);
    assert.equal(zerosCount, 22242378);
  });

  it('33', () => {
    const zerosCount = getZerosCount(45886779);
    assert.equal(zerosCount, 11471688);
  });

  it('34', () => {
    const zerosCount = getZerosCount(69046507);
    assert.equal(zerosCount, 17261621);
  });

  it('35', () => {
    const zerosCount = getZerosCount(70719640);
    assert.equal(zerosCount, 17679907);
  });

  it('36', () => {
    const zerosCount = getZerosCount(17797891);
    assert.equal(zerosCount, 4449468);
  });

  it('37', () => {
    const zerosCount = getZerosCount(58507598);
    assert.equal(zerosCount, 14626892);
  });

  it('38', () => {
    const zerosCount = getZerosCount(32540942);
    assert.equal(zerosCount, 8135230);
  });

  it('39', () => {
    const zerosCount = getZerosCount(27919512);
    assert.equal(zerosCount, 6979873);
  });

  it('40', () => {
    const zerosCount = getZerosCount(64290837);
    assert.equal(zerosCount, 16072703);
  });

  it('41', () => {
    const zerosCount = getZerosCount(23447667);
    assert.equal(zerosCount, 5861913);
  });

  it('42', () => {
    const zerosCount = getZerosCount(61994468);
    assert.equal(zerosCount, 15498611);
  });

  it('43', () => {
    const zerosCount = getZerosCount(8847541);
    assert.equal(zerosCount, 2211881);
  });

  it('44', () => {
    const zerosCount = getZerosCount(8942215);
    assert.equal(zerosCount, 2235548);
  });

  it('45', () => {
    const zerosCount = getZerosCount(12843118);
    assert.equal(zerosCount, 3210772);
  });

  it('46', () => {
    const zerosCount = getZerosCount(50116279);
    assert.equal(zerosCount, 12529066);
  });

  it('47', () => {
    const zerosCount = getZerosCount(56284115);
    assert.equal(zerosCount, 14071023);
  });

  it('48', () => {
    const zerosCount = getZerosCount(48713939);
    assert.equal(zerosCount, 12178477);
  });

  it('49', () => {
    const zerosCount = getZerosCount(4155503);
    assert.equal(zerosCount, 1038871);
  });

  it('50', () => {
    const zerosCount = getZerosCount(95151060);
    assert.equal(zerosCount, 23787758);
  });

  it('51', () => {
    const zerosCount = getZerosCount(40666610);
    assert.equal(zerosCount, 10166647);
  });

  it('52', () => {
    const zerosCount = getZerosCount(51028789);
    assert.equal(zerosCount, 12757193);
  });

  it('53', () => {
    const zerosCount = getZerosCount(66344063);
    assert.equal(zerosCount, 16586010);
  });

  it('54', () => {
    const zerosCount = getZerosCount(57003966);
    assert.equal(zerosCount, 14250986);
  });

  it('55', () => {
    const zerosCount = getZerosCount(99159977);
    assert.equal(zerosCount, 24789989);
  });

  it('56', () => {
    const zerosCount = getZerosCount(76652057);
    assert.equal(zerosCount, 19163009);
  });

  it('57', () => {
    const zerosCount = getZerosCount(66239573);
    assert.equal(zerosCount, 16559886);
  });

  it('58', () => {
    const zerosCount = getZerosCount(11298016);
    assert.equal(zerosCount, 2824499);
  });

  it('59', () => {
    const zerosCount = getZerosCount(21472081);
    assert.equal(zerosCount, 5368015);
  });

  it('60', () => {
    const zerosCount = getZerosCount(9106993);
    assert.equal(zerosCount, 2276742);
  });

  it('61', () => {
    const zerosCount = getZerosCount(11222228);
    assert.equal(zerosCount, 2805552);
  });

  it('62', () => {
    const zerosCount = getZerosCount(78672376);
    assert.equal(zerosCount, 19668091);
  });

  it('63', () => {
    const zerosCount = getZerosCount(56782515);
    assert.equal(zerosCount, 14195625);
  });

  it('64', () => {
    const zerosCount = getZerosCount(82493340);
    assert.equal(zerosCount, 20623329);
  });

  it('65', () => {
    const zerosCount = getZerosCount(69259616);
    assert.equal(zerosCount, 17314899);
  });

  it('66', () => {
    const zerosCount = getZerosCount(54221292);
    assert.equal(zerosCount, 13555318);
  });

  it('67', () => {
    const zerosCount = getZerosCount(67474023);
    assert.equal(zerosCount, 16868499);
  });

  it('68', () => {
    const zerosCount = getZerosCount(16102016);
    assert.equal(zerosCount, 4025500);
  });

  it('69', () => {
    const zerosCount = getZerosCount(41407017);
    assert.equal(zerosCount, 10351751);
  });

  it('70', () => {
    const zerosCount = getZerosCount(58559981);
    assert.equal(zerosCount, 14639988);
  });

  it('71', () => {
    const zerosCount = getZerosCount(45369503);
    assert.equal(zerosCount, 11342371);
  });

  it('72', () => {
    const zerosCount = getZerosCount(90954340);
    assert.equal(zerosCount, 22738579);
  });

  it('73', () => {
    const zerosCount = getZerosCount(59369189);
    assert.equal(zerosCount, 14842291);
  });

  it('74', () => {
    const zerosCount = getZerosCount(90406062);
    assert.equal(zerosCount, 22601509);
  });

  it('75', () => {
    const zerosCount = getZerosCount(2923395);
    assert.equal(zerosCount, 730845);
  });

  it('76', () => {
    const zerosCount = getZerosCount(33852979);
    assert.equal(zerosCount, 8463238);
  });

  it('77', () => {
    const zerosCount = getZerosCount(76560288);
    assert.equal(zerosCount, 19140065);
  });

  it('78', () => {
    const zerosCount = getZerosCount(44443139);
    assert.equal(zerosCount, 11110778);
  });

  it('79', () => {
    const zerosCount = getZerosCount(35900572);
    assert.equal(zerosCount, 8975136);
  });

  it('80', () => {
    const zerosCount = getZerosCount(22797574);
    assert.equal(zerosCount, 5699388);
  });

  it('81', () => {
    const zerosCount = getZerosCount(51579807);
    assert.equal(zerosCount, 12894948);
  });

  it('82', () => {
    const zerosCount = getZerosCount(15652848);
    assert.equal(zerosCount, 3913206);
  });

  it('83', () => {
    const zerosCount = getZerosCount(15608325);
    assert.equal(zerosCount, 3902075);
  });

  it('84', () => {
    const zerosCount = getZerosCount(38498903);
    assert.equal(zerosCount, 9624719);
  });

  it('85', () => {
    const zerosCount = getZerosCount(31365753);
    assert.equal(zerosCount, 7841435);
  });

  it('86', () => {
    const zerosCount = getZerosCount(76965077);
    assert.equal(zerosCount, 19241264);
  });

  it('87', () => {
    const zerosCount = getZerosCount(49025738);
    assert.equal(zerosCount, 12256430);
  });

  it('88', () => {
    const zerosCount = getZerosCount(80241106);
    assert.equal(zerosCount, 20060272);
  });

  it('89', () => {
    const zerosCount = getZerosCount(31204366);
    assert.equal(zerosCount, 7801085);
  });

  it('90', () => {
    const zerosCount = getZerosCount(5140889);
    assert.equal(zerosCount, 1285218);
  });

  it('91', () => {
    const zerosCount = getZerosCount(2562717);
    assert.equal(zerosCount, 640675);
  });

  it('92', () => {
    const zerosCount = getZerosCount(33884601);
    assert.equal(zerosCount, 8471145);
  });

  it('93', () => {
    const zerosCount = getZerosCount(70588762);
    assert.equal(zerosCount, 17647186);
  });

  it('94', () => {
    const zerosCount = getZerosCount(48404125);
    assert.equal(zerosCount, 12101025);
  });

  it('95', () => {
    const zerosCount = getZerosCount(6279);
    assert.equal(zerosCount, 1568);
  });

  it('96', () => {
    const zerosCount = getZerosCount(39754582);
    assert.equal(zerosCount, 9938640);
  });

  it('97', () => {
    const zerosCount = getZerosCount(7576126);
    assert.equal(zerosCount, 1894026);
  });

  it('98', () => {
    const zerosCount = getZerosCount(97789747);
    assert.equal(zerosCount, 24447431);
  });

  it('99', () => {
    const zerosCount = getZerosCount(6214414);
    assert.equal(zerosCount, 1553598);
  });

  it('100', () => {
    const zerosCount = getZerosCount(95670627);
    assert.equal(zerosCount, 23917650);
  });
});
