
import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html'
})
export class WhatsNewComponent {
  categories = ['All', 'Lifestyle', 'Travel', 'Fashion', 'Sports', 'Technology'];
  selectedCategory = 'All';

  allNews = [
    { title: 'Top 10 Travel Spots for 2025', category: 'Travel' },
    { title: 'Healthy Lifestyle Habits', category: 'Lifestyle' },
    { title: 'AI in Sports Analytics', category: 'Sports' },
    { title: 'Next Gen Wearables', category: 'Technology' },
    { title: 'Minimalist Fashion Ideas', category: 'Fashion' },
  ];

  get filteredNews() {
    if (this.selectedCategory === 'All') return this.allNews;
    return this.allNews.filter(news => news.category === this.selectedCategory);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
