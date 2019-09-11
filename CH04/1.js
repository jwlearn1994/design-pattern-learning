'use strict';


var Human = function(param) {
  this.skill = param && param.skill || '保密';
  this.habit = param && param.habit || '保密';
}

Human.prototype = {
  getSkill() {
    console.log(this.skill);
  }
}


var Named = function(name) {
  var self = this;

  // 構造器
  (function(self, name) {
    self.wholeName = name;
    if (name.trim().indexOf(' ') > -1) {
      self.firstName = name.split(' ')[0];
      self.lastName = name.split(' ')[1];
    }
  })(self, name)
}


var Work = function(work) {
  var self = this;

  // 構造器
  (function(self, work) {
    switch (work) {
      case 'code':
        self.work = '工程師';
        self.workIntro = '沈醉於編寫代碼';
        break;
      case 'UI':
      case 'UX':
        self.work = '設計師';
        self.workIntro = '設計就是一種藝術';
        break;
      case 'teach':
        self.work = '教師';
        self.workIntro = '分享是一種快樂';
        break;
      default:
        self.work = work;
        self.workIntro = '對不起，我們還不清楚您所選擇職位的相關描述';
    }
  })(self, work)
}


// 更換職位
Work.prototype.changeWork = function(work) {
  this.work = work;
}

// 添加對職位的描述
Work.prototype.changeIntro = function(des) {
  this.workDescript = des;
};



/**
 * 應娉者建造者
 *
 * @param name 姓名（全名）
 * @param work 期望職位
 */
var Person = function(name, work) {
  var _person = new Human();

  _person.name = new Named(name);

  _person.work = new Work(work);

  return _person;
};

var person = new Person('Johnny', 'code');
console.log(person);