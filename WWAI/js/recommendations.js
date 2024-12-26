// 闻未咖啡菜单数据
const coffeeData = {
    traditional: {
        'nucal-a': {
            name: '核桃树 A',
            origin: '哥伦比亚-慧兰-核桃树庄园',
            bean: '铁皮卡',
            process: '厌氧水洗',
            drinks: {
                black: {
                    name: '核桃 A 美式咖啡',
                    tags: ['花香', '酸香'],
                    flavor: '散发着烤菠萝的独特香气，夹杂着迷人花香，尾韵还有焦糖的甜蜜'
                },
                milk: {
                    name: '核桃 A 拿铁',
                    tags: ['果香', '黑巧克力'],
                    flavor: '犹如一场味蕾的奇幻之旅，草莓巧克力的香甜与威化饼干的香脆相互交融，令人陶醉其中'
                }
            }
        },
        'nucal-b': {
            name: '核桃树 B',
            origin: '哥伦比亚-慧兰-核桃树庄园',
            bean: '铁皮卡',
            process: '厌氧水洗',
            drinks: {
                black: {
                    name: '核桃 B 美式咖啡',
                    tags: ['果香', '酒香'],
                    flavor: '如夏日盛宴般的热带水果芬芳，与醇厚迷人的榛果酒风味巧妙融合，带来独特的味蕾享受'
                },
                milk: {
                    name: '核桃 B 拿铁',
                    tags: ['黑巧克力', '果香'],
                    flavor: '浓郁绵密如黑森林蛋糕，甜蜜中带着葡萄干的独特风味'
                }
            }
        },
        'yunnan-a': {
            name: '云南精选 A',
            origin: '中国-云南-普洱/保山/西双版纳',
            bean: '瑰夏',
            process: '日晒',
            drinks: {
                black: {
                    name: '云南 A 美式咖啡',
                    tags: ['果香', '酒香', '酸香'],
                    flavor: '融合了蔓越莓酸甜、香槟细腻气泡感与西柚清新微苦。蔓越莓赋予活泼果味层次，香槟增添轻盈灵动，西柚平衡口感，带来清爽复杂味觉体验'
                },
                milk: {
                    name: '云南 A 拿铁',
                    tags: ['黑巧克力'],
                    flavor: '干醇厚黑巧克力与香脆威化饼干风味交织，口感丰富'
                }
            }
        },
        'yunnan-b': {
            name: '云南精选 B',
            origin: '中国-云南-普洱/保山/西双版纳',
            bean: '瑰夏',
            process: '日晒',
            drinks: {
                black: {
                    name: '云南 B 美式咖啡',
                    tags: ['酒香', '果香'],
                    flavor: '散发着雪莉酒的优雅韵味，黑莓的酸甜气息与葡萄的清甜相互交织，带来层次丰富的独特口感，让人回味无穷'
                },
                milk: {
                    name: '云南 B 拿铁',
                    tags: ['坚果', '奶油'],
                    flavor: '如《傲慢与偏见》中达西与伊丽莎白的相遇，细腻而美妙，带来独特的味蕾触动'
                }
            }
        },
        'deep-blend': {
            name: '深烘拼配',
            origin: '中国-云南-普洱/保山/西双版纳',
            bean: '混合豆',
            process: '日晒',
            drinks: {
                black: {
                    name: '深烘焙美式咖啡',
                    tags: ['坚果', '黑巧克力'],
                    flavor: '巧克力的苦涩与坚果的甘甜相互平衡，营造出一种令人难以抗拒的美味体验'
                },
                milk: {
                    name: '深烘焙拿铁',
                    tags: ['坚果', '黑巧克力'],
                    flavor: '巧克力的苦涩与坚果的甘甜相互平衡，营造出一种令人难以抗拒的美味体验'
                },
                tonic: {
                    name: '汤力美式',
                    tags: [],
                    flavor: '如人生一般，有酸有甜，也有苦尽甘来的美好',
                    cold: true
                }
            }
        }
    },
    special: {
        'snow-rice': {
            name: '雪米',
            hot: true,
            ingredients: '黄油牛乳、玄米茶、云南精选浓缩咖啡',
            tags: ['奶香', '茶香'],
            flavor: '超级好喝的冬季限定，一起听雪落的声音'
        },
        'nucal-apricot': {
            name: '核其杏',
            cold: true,
            ingredients: '燕麦奶，红苹果汁，自制红苹果杏子酱，巧克力，哥伦比亚核桃树庄园浓缩咖啡',
            tags: ['奶香', '果香', '巧克力'],
            flavor: '何其有幸喝到这款饮品'
        },
        'end-summer': {
            name: '尾夏',
            cold: true,
            ingredients: '苹果泡沫，苹果梨苹果汁澄清液，哥伦比亚核桃树庄园稀释浓缩咖啡',
            tags: ['果香'],
            flavor: '回味夏天的味道'
        },
        'sour-great': {
            name: '酸了酸了，棒！',
            hot: true,
            ingredients: '安岳黄柠檬，糖油，埃塞戈里瑰夏咖啡',
            tags: ['酸香'],
            flavor: '一口酸到极致，真棒！'
        },
        'memory-bread': {
            name: '记忆面包',
            hot: true,
            ingredients: '香蕉奶油，蜂蜜柚子，巴拿马加里多庄园瑰夏咖啡',
            tags: ['奶油', '果香', '酸香'],
            flavor: '希望你的回忆盒子里全是甜蜜'
        },
        'heihei': {
            name: 'heihei',
            cold: true,
            ingredients: '花茶、黑番茄西柚发酵液、云南精选冷萃咖啡',
            tags: ['茶香', '酸香'],
            flavor: '茶与咖啡的巧妙融合，世界本大同'
        }
    }
};

// 获取咖啡推荐
async function getCoffeeRecommendation(temperature, type, flavorId) {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const isHot = temperature === 'q1_1';
    const flavorText = getFlavorText(flavorId);
    
    // 处理特调咖啡
    if (type === 'q2_3') {
        return findSpecialCoffee(isHot, flavorText);
    }
    
    // 处理传统咖啡
    const isBlack = type === 'q2_1';
    return findTraditionalCoffee(isHot, isBlack, flavorText);
}

function getFlavorText(flavorId) {
    const flavorMap = {
        // 传统咖啡风味
        'q3_1': '花香',
        'q3_2': '果香',
        'q3_3': '酸香',
        'q3_4': '酒香',
        'q3_5': '黑巧克力',
        'q3_6': '坚果',
        'q3_7': '奶油',
        'q3_8': '奶香',
        'q3_9': '茶香',
        // 特调咖啡风味
        'q4_1': '奶香',
        'q4_2': '茶香',
        'q4_3': '果香',
        'q4_4': '巧克力',
        'q4_5': '酸香',
        'q4_6': '奶油'
    };
    return flavorMap[flavorId];
}

function findSpecialCoffee(isHot, flavor) {
    for (const [_, coffee] of Object.entries(coffeeData.special)) {
        if ((isHot && coffee.hot) || (!isHot && coffee.cold)) {
            if (coffee.tags.includes(flavor)) {
                return {
                    name: coffee.name,
                    temperature: isHot ? '热' : '冷',
                    type: 'special',
                    ingredients: coffee.ingredients,
                    tags: coffee.tags,
                    flavor: coffee.flavor
                };
            }
        }
    }
    return null;
}

function findTraditionalCoffee(isHot, isBlack, flavor) {
    for (const [_, coffee] of Object.entries(coffeeData.traditional)) {
        const drink = isBlack ? coffee.drinks.black : coffee.drinks.milk;
        
        // 跳过只有冷饮的汤力美式
        if (drink.cold && isHot) continue;
        
        if (drink.tags.includes(flavor)) {
            return {
                name: drink.name,
                temperature: isHot ? '热' : '冷',
                type: 'traditional',
                origin: coffee.origin,
                bean: coffee.bean,
                process: coffee.process,
                tags: drink.tags,
                flavor: drink.flavor
            };
        }
    }
    return null;
}