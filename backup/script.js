// Person Database JavaScript

// Profile data
const profilesData = [

  // Person 1
  {
    id: "anirban_banerjee",
    name: "Person 1",
    designation: "Home",
    relation: "Relative",
    image: "images.jpg",

    //personal details
    personal: {
      data: [
        { field: "Email", val: "This is sample Email" },
        { field: "Mobile", val: "34623346" },
        { field: "Mob2", val: "34623346" }
      ]
    },

    //Academic details
    academic: {
      study: [
        { key: "Ph.D. in Zoology", value: "University of Calcutta", num: 2015 },
        { key: "M.Sc. in Zoology", value: "University of Kalyani", num: 2010 }
      ],
      achivements: ["Animal Physiology", "Comparative Endocrinology", "Stress Biology"],
    },

    //Work details
    work: {
      current_position: "Assistant Professor & Head",
      previous_roles: [
        { key: "Assistant Professor", value: "University of Kalyani", duration: "" }
      ]
    },
    // Relationships
    relationships: {
      connections: [
        { key: "Father", value: "Name Example"},
        { key: "Mother", value: "Name Example2"}
      ]
    },

    // Credentials
    cred: {
      dta: [
        { key: "Facebook", value: "u - user_name | p - password123"},
        { key: "Insta", value: "u - user_name | p - password123"}
      ]
    },
    // Contact
    contact: {
      info: [
        { key: "Facebook", value: "u - user_name | p - password123"},
        { key: "Insta", value: "u - user_name | p - password123"}
      ]
    },

    // Character Note
    reality: {
      note: "This is a sample note for reality check."
    },

    // Documents
    folderPath: "person1/",
    documents: [
      { name: "images.jpg", type: "image", path: "person1/images.jpg" },
      { name: "Research_Papers.pdf", type: "document", path: "person1/images2.jpg" },
      { name: "Certificates.pdf", type: "certificate", path: "person1/images3.jpg"  }
    ]
  },

  // Person 2
  {
    id: "debabrata_pramanick",
    name: "Person 2",
    designation: "Office",
    relation: "Relative",
    image: "images.jpg",
    personal: {
      data: [
        { field: "Email", val: "This is sample Email" },
        { field: "Mobile", val: "34623346" },
        { field: "Mob2", val: "34623346" }
      ]
    },
    academic: {
      study: [
        { key: "Ph.D. in Zoology", value: "University of Calcutta", num: 2015 },
        { key: "M.Sc. in Zoology", value: "University of Kalyani", num: 2010 }
      ],
      achivements: ["Animal Physiology", "Comparative Endocrinology", "Stress Biology"],
    },
    work: {
      current_position: "Assistant Professor & Head",
      previous_roles: [
        { key: "Assistant Professor", value: "University of Kalyani", duration: "" }
      ]
    },
    relationships: {
      connections: [
        { key: "Ph.D. in Zoology", value: "University of Calcutta"},
        { key: "M.Sc. in Zoology", value: "University of Kalyani"}
      ]
    },
    // Credentials
    cred: {
      dta: [
        { key: "Facebook", value: "u - user_name | p - password123"},
        { key: "Insta", value: "u - user_name | p - password123"}
      ]
    },
    // Contact
    contact: {
      info: [
        { key: "Facebook", value: "u - user_name | p - password123"},
        { key: "Insta", value: "u - user_name | p - password123"}
      ]
    },

    // Character Note
    reality: {
      note: "This is a sample note for reality check."
    },
    
    // Documents
    folderPath: "person2/",
    documents: [
      { name: "Research_Papers.pdf", type: "document", path: "person1/images2.jpg" },
      { name: "Certificates.pdf", type: "certificate", path: "person1/images3.jpg"  }
    ]
  },
  // Person 3
  {
    id: "mampi_dutta",
    name: "Person 3",
    designation: "SACT",
    relation: "People",
    image: "images.jpg",
    personal: {
      data: [
        { field: "Email", val: "This is sample Email" },
        { field: "Mobile", val: "34623346" },
        { field: "Mob2", val: "34623346" }
      ]
    },
    academic: {
      study: [
        { key: "Ph.D. in Zoology", value: "University of Calcutta", num: 2015 },
        { key: "M.Sc. in Zoology", value: "University of Kalyani", num: 2010 }
      ],
      achivements: ["Animal Physiology", "Comparative Endocrinology", "Stress Biology"],
    },
    work: {
      current_position: "Assistant Professor & Head",
      previous_roles: [
        { key: "Assistant Professor", value: "University of Kalyani", duration: "" }
      ]
    },
    relationships: {
      connections: [
        { key: "Ph.D. in Zoology", value: "University of Calcutta"},
        { key: "M.Sc. in Zoology", value: "University of Kalyani"}
      ]
    },

    // Credentials
    cred: {
      dta: [
        { key: "Facebook", value: "u - user_name | p - password123"},
        { key: "Insta", value: "u - user_name | p - password123"}
      ]
    },
    // Contact
    contact: {
      info: [
        { key: "Facebook", value: "u - user_name | p - password123"},
        { key: "Insta", value: "u - user_name | p - password123"}
      ]
    },

    // Character Note
    reality: {
      note: "This is a sample note for reality check."
    },
    

    // Documents
    folderPath: "person3/",
    documents: [
      { name: "images.jpg", type: "image", path: "person2/images.jpg" },
      { name: "Research_Papers.pdf", type: "document", path: "person2/images2.jpg" }
    ]
  }
];

//End of Profile Data


// Relations Data

const relations = [
  {
    name: "Relative",
    color: "#0f2dc1ff",
    members: ["debabrata_paramanick"]
  },
  {
    name: "People",
    color: "#e6d518ff",
    members: ["mampi_dutta"]
  }
];

const relationships = [
  { from: "anirban_banerjee", to: "debabrata_pramanick", type: "partner", label: "partners" },
  { from: "anirban_banerjee", to: "mampi_dutta", type: "partner", label: "again partners" },
  { from: "debabrata_pramanick", to: "mampi_dutta", type: "child", label: "child" }
];
















// Global state management
let currentProfiles = [...profilesData];
let currentView = 'gallery';
let selectedProfile = null;
let mindmapNetwork = null;

// DOM Elements
const profilesGrid = document.getElementById('profilesGrid');
const searchInput = document.getElementById('searchInput');
const relationFilter = document.getElementById('relationFilter');
const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');
const profileDetail = document.getElementById('profileDetail');
const backToGallery = document.getElementById('backToGallery');
const mindmapContainer = document.getElementById('mindmapNetwork');
const resetZoomBtn = document.getElementById('resetZoom');
const clusterByDeptBtn = document.getElementById('clusterByDept');
const addProfileForm = document.getElementById('addProfileForm');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const profilesTable = document.getElementById('profilesTable');
const exportProfilesBtn = document.getElementById('exportProfiles');
const exportCSVBtn = document.getElementById('exportCSV');
const importFileInput = document.getElementById('importFile');
const importProfilesBtn = document.getElementById('importProfiles');
const documentModal = document.getElementById('documentModal');
const closeModal = document.getElementById('closeModal');
const loadingSpinner = document.getElementById('loadingSpinner');

// Utility Functions
function getInitials(name) {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
}

function showLoading() {
  loadingSpinner.classList.add('active');
}

function hideLoading() {
  loadingSpinner.classList.remove('active');
}

function showView(viewName) {
  views.forEach(view => view.classList.remove('active'));
  document.getElementById(viewName + 'View').classList.add('active');

  navButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

  currentView = viewName;

  if (viewName === 'mindmap') {
    setTimeout(initializeMindMap, 100);
  } else if (viewName === 'admin') {
    renderProfilesTable();
  }
}

function filterProfiles() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedRelation = relationFilter.value;

  currentProfiles = profilesData.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm) ||
      profile.designation.toLowerCase().includes(searchTerm) ||
      // Search in personal details
      profile.personal.data.some(item => 
        item.val.toLowerCase().includes(searchTerm)
      ) ||
      // Search in academic details
      profile.academic.study.some(item =>
        item.key.toLowerCase().includes(searchTerm) ||
        item.value.toLowerCase().includes(searchTerm)
      ) ||
      // Search in work details
      profile.work.current_position.toLowerCase().includes(searchTerm);

    const matchesRelation = !selectedRelation || profile.relation === selectedRelation;

    return matchesSearch && matchesRelation;
  });

  renderProfiles();
}

// Profile Card Rendering
function createProfileCard(profile) {
  const card = document.createElement('div');
  card.className = 'profile-card';
  card.innerHTML = `
    <div class="profile-card__header">
      <div class="profile-avatar">
        ${profile.image ? `<img src="${profile.image}" alt="${profile.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
        <div style="${profile.image ? 'display: none;' : ''}">${getInitials(profile.name)}</div>
      </div>
    </div>
    <div class="profile-card__body">
      <h3 class="profile-name">${profile.name}</h3>
      <p class="profile-designation">${profile.designation}</p>
      <span class="profile-relation">${profile.relation}</span>
      <div class="profile-actions">
        <button class="btn btn--primary btn--sm" onclick="viewProfile('${profile.id}')">
          View Profile
        </button>
        <button class="btn btn--secondary btn--sm" onclick="openFolder('${profile.id}')">
          Open Folder
        </button>
        <button class="btn btn--outline btn--sm" onclick="showMindMapForProfile('${profile.id}')">
          Mind Map
        </button>
      </div>
    </div>
  `;
  return card;
}

function renderProfiles() {
  profilesGrid.innerHTML = '';
  currentProfiles.forEach(profile => {
    const card = createProfileCard(profile);
    profilesGrid.appendChild(card);
  });
}

// Profile Detail View
function viewProfile(profileId) {
  selectedProfile = profilesData.find(p => p.id === profileId);
  if (!selectedProfile) return;

  renderProfileDetail();
  showView('profile');
}

function renderProfileDetail() {
  if (!selectedProfile) return;

  const profile = selectedProfile;

  profileDetail.innerHTML = `
    <div class="profile-header">
      <div class="profile-header-avatar">
        ${profile.image ? `<img src="${profile.image}" alt="${profile.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
        <div style="${profile.image ? 'display: none;' : ''}">${getInitials(profile.name)}</div>
      </div>
      <div class="profile-header-info">
        <h1>${profile.name}</h1>
        <p class="profile-designation">${profile.designation}</p>
        <span class="profile-relation">${profile.relation}</span>
      </div>
    </div>
    
    <div class="profile-tabs">
      <button class="tab-btn active" data-tab="personal">Personal Info</button>
      <button class="tab-btn" data-tab="academic">Academic</button>
      <button class="tab-btn" data-tab="work">Work Experience</button>
      <button class="tab-btn" data-tab="relationships">Relationships</button>
      <button class="tab-btn" data-tab="cred">Credentials</button>
      <button class="tab-btn" data-tab="contact">Contact</button>
      <button class="tab-btn" data-tab="character">Character</button>
      <button class="tab-btn" data-tab="documents">Documents</button>
    </div>
    



    <div class="tab-content active" id="personalTab">
      <div class="profile-section">
        <h3>Personal Information</h3>
        <div class="info-grid">
          ${profile.personal.data.map(per => `
            <div class="info-item">
              <span class="info-label">${per.field}</span>
              <span class="info-value">${per.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
   
    <div class="tab-content" id="academicTab">
      <div class="profile-section">
        <h3>Study</h3>
        <div class="info-grid">
          ${profile.academic.study.map(edu => `
            <div class="info-item">
              <span class="info-label">${edu.key}</span>
              <span class="info-value">${edu.value} (${edu.num})</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="profile-section">
        <h3>Achivements</h3>
        <div class="info-grid">
          ${profile.academic.achivements.map(interest => `
            <div class="info-item">
              <span class="info-value">${interest}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div class="tab-content" id="workTab">
      <div class="profile-section">
        <h3>Current Position</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Position</span>
            <span class="info-value">${profile.work.current_position}</span>
          </div>
        </div>
      </div>
      
      ${profile.work.previous_roles ? `
        <div class="profile-section">
          <h3>Previous Roles</h3>
          <div class="info-grid">
            ${profile.work.previous_roles.map(role => `
              <div class="info-item">
                <span class="info-label">${role.key}</span>
                <span class="info-value">${role.value} ${role.duration}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
    
    <div class="tab-content" id="relationshipsTab">
      <div class="profile-section">
        <h3>Relations</h3>
        <div class="info-grid">
          ${profile.relationships.connections.map(rel => `
            <div class="info-item">
              <span class="info-label">${rel.key}</span>
              <span class="info-value">${rel.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>






    <div class="tab-content" id="credTab">
      <div class="profile-section">
        <h3>Credentials</h3>
        <div class="info-grid">
          ${profile.cred.dta.map(crd => `
            <div class="info-item">
              <span class="info-label">${crd.key}</span>
              <span class="info-value">${crd.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>


    <div class="tab-content" id="contactTab">
      <div class="profile-section">
        <h3>Contact Information</h3>
        <div class="info-grid">
          ${profile.contact.info.map(ci => `
            <div class="info-item">
              <span class="info-label">${ci.key}</span>
              <span class="info-value">${ci.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="tab-content" id="characterTab">
      <div class="profile-section">
        <h3>Reality Check</h3>
        <div class="info-grid">
            <div class="info-item">
              <span class="info-label">${profile.reality.note}</span>
            </div>
        </div>
      </div>
    </div>
    
    
    <div class="tab-content" id="documentsTab">
      <div class="profile-section">
        <h3>Documents &amp; Files</h3>
        <div class="documents-list">
          ${profile.documents.map(doc => `
            <div class="document-item">
              <div class="document-info">
                <div class="document-icon">📄</div>
                <div>
                  <div>${doc.name}</div>
                  <small class="text-secondary">${doc.type}</small>
                </div>
              </div>
              <button class="btn btn--outline btn--sm" onclick="viewDocument('${doc.name}', '${doc.type}', '${doc.path}')">
                Info
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Add tab functionality
  const detailTabButtons = profileDetail.querySelectorAll('.tab-btn');
  const detailTabContents = profileDetail.querySelectorAll('.tab-content');

  detailTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;

      detailTabButtons.forEach(b => b.classList.remove('active'));
      detailTabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(tabName + 'Tab').classList.add('active');
    });
  });
}

// Mind Map Functionality
function initializeMindMap() {
  if (!mindmapContainer) return;

  const nodes = profilesData.map(profile => ({
    id: profile.id,
    label: profile.name,
    title: `${profile.name}\n${profile.designation}\n${profile.relation}`,
    shape: 'circularImage',
    image: profile.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=3B82F6&color=fff&size=128`,
    borderWidth: 3,
    size: 40,
    font: { 
      color: '#374151',
      size: 14,
      face: 'Arial',
      strokeWidth: 2,
      strokeColor: '#ffffff'
    }
  }));

  const edges = relationships.map(rel => ({
    from: rel.from,
    to: rel.to,
    label: rel.label,
    color: { color: '#6B7280' },
    font: { size: 12, color: '#374151' },
    arrows: rel.type === 'child' ? 'to' : 'none',
    smooth: {
      type: 'continuous'
    }
  }));

  const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };

  const options = {
    physics: {
      enabled: true,
      stabilization: { 
        iterations: 100,
        fit: true
      },
      barnesHut: {
        gravitationalConstant: -2000,
        springConstant: 0.04,
        springLength: 200
      }
    },
    nodes: {
      borderWidth: 2,
      shadow: true,
      shapeProperties: {
        useBorderWithImage: true
      }
    },
    edges: {
      shadow: true,
      width: 2
    },
    interaction: {
      hover: true,
      selectConnectedEdges: false,
      navigationButtons: true,
      keyboard: true
    }
  };

  mindmapNetwork = new vis.Network(mindmapContainer, data, options);

  mindmapNetwork.on('click', function (params) {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      viewProfile(nodeId);
    }
  });

  // Fit the network once it's stabilized
  mindmapNetwork.once('stabilized', function() {
    mindmapNetwork.fit();
  });
}

function showMindMapForProfile(profileId) {
  showView('mindmap');
  setTimeout(() => {
    if (mindmapNetwork) {
      mindmapNetwork.selectNodes([profileId]);
      mindmapNetwork.focus(profileId, { scale: 1.5 });
    }
  }, 200);
}








// Document Viewer
function viewDocument(viewfile, type, path) {
  document.getElementById('documentTitle').textContent = viewfile;

  const content = document.getElementById('documentContent');
  content.innerHTML = `
    <div style="padding: 20px; text-align: center;" id="docInfo">
      <h4>📄 ${viewfile}</h4>
      <p><strong>Type:</strong> ${type}</p>
      <p id="docSize"><strong>Size:</strong> calculating...</p>
      <br>
      <p><strong>Path:</strong> ${path}</p>
      <p style="color: #666; font-style: italic;">
        Click on the view button below to Open the document.
      </p>
      <br>
      <button class="btn btn--primary" id="viewBtn">
        📥 View
      </button>
    </div>
  `;

  // Helper to format bytes
  function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    if (bytes == null) return 'Unknown';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Try to get Content-Length via HEAD request
  async function fetchSize(url) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) throw new Error('Not accessible');
      const len = res.headers.get('content-length');
      return len ? parseInt(len, 10) : null;
    } catch (e) {
      // Some servers disallow HEAD; try GET but don't download body fully
      try {
        const res2 = await fetch(url, { method: 'GET' });
        if (!res2.ok) throw new Error('Not accessible');
        const len2 = res2.headers.get('content-length');
        return len2 ? parseInt(len2, 10) : null;
      } catch (e2) {
        return null;
      }
    }
  }

  // Build a best-effort URL for a document entry
  function buildDocUrl(doc, profileFolder) {
    if (doc.path) {
      // If path already looks like a full file (contains filename), use it
      if (doc.path.endsWith('/')) return doc.path + doc.name;
      // If path contains a dot after last slash (looks like file), use it
      const lastSeg = doc.path.split('/').pop();
      if (lastSeg && lastSeg.includes('.')) return doc.path;
      // Otherwise path likely a folder
      return doc.path + (doc.path.endsWith('/') ? '' : '/') + doc.name;
    }
    // Fallback to profile folder + name
    return (profileFolder || '') + (profileFolder && !profileFolder.endsWith('/') ? '/' : '') + doc.name;
  }

  (async () => {
    const sizeEl = document.getElementById('docSize');
    const viewBtn = document.getElementById('viewBtn');
    viewBtn.addEventListener('click', () => downloadDocument(path));

    if (type === 'folder') {
      // find matching profile by folder path if possible
      const profile = profilesData.find(p => p.folderPath === path) || selectedProfile;
      if (!profile || !profile.documents || profile.documents.length === 0) {
        sizeEl.innerHTML = `<strong>Size:</strong> Unknown (no documents available)`;
        return;
      }

      // Fetch sizes for each document in folder
      const entries = profile.documents.map(doc => {
        const url = buildDocUrl(doc, profile.folderPath);
        return { doc, url };
      });

      // Do HEAD requests in parallel
      const promises = entries.map(e => fetchSize(e.url));
      const results = await Promise.all(promises);

      let total = 0;
      const rows = entries.map((e, i) => {
        const bytes = results[i];
        if (bytes != null) total += bytes;
        return `<div style="display:flex;justify-content:space-between;padding:6px 0;">
                  <div>${e.doc.name}</div>
                  <div style="color:#666">${formatBytes(bytes)}</div>
                </div>`;
      }).join('');

      sizeEl.innerHTML = `<strong>Size:</strong> ${formatBytes(total)} <small style="color:#666">(sum of retrievable files)</small>
        <div style="margin-top:10px;text-align:left">${rows}</div>`;
    } else {
      // single file: try to determine its size
      const fileUrl = path || (selectedProfile && selectedProfile.documents && selectedProfile.documents.find(d => d.name === viewfile) ? buildDocUrl(selectedProfile.documents.find(d => d.name === viewfile), selectedProfile.folderPath) : viewfile);
      const bytes = await fetchSize(fileUrl);
      sizeEl.innerHTML = `<strong>Size:</strong> ${formatBytes(bytes)}${bytes == null ? ' <small style="color:#666">(could not determine)</small>' : ''}`;
    }
  })();

  documentModal.classList.add('active');
}








function downloadDocument(path) {
  // Document Launcher
  window.location.href = path;
}

function openFolder(profileId) {
  const profile = profilesData.find(p => p.id === profileId);
  if (!profile) return;

  viewDocument(`${profile.name} - Complete Folder`, 'folder', profile.folderPath);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
  // Navigation
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const viewName = btn.dataset.view;
      showView(viewName);
    });
  });

  // Search and Filter
  searchInput.addEventListener('input', filterProfiles);
  relationFilter.addEventListener('change', filterProfiles);

  // Back button
  backToGallery.addEventListener('click', () => showView('gallery'));

  // Mind map controls
  if (resetZoomBtn) {
    resetZoomBtn.addEventListener('click', () => {
      if (mindmapNetwork) {
        mindmapNetwork.fit();
      }
    });
  }

  // Modal close
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      documentModal.classList.remove('active');
    });
  }

  // Close modal on backdrop click
  documentModal.addEventListener('click', (e) => {
    if (e.target === documentModal) {
      documentModal.classList.remove('active');
    }
  });

  // Initialize app
  renderProfiles();
  showView('gallery');
});

// Global functions for onclick handlers
window.viewProfile = viewProfile;
window.openFolder = openFolder;
window.showMindMapForProfile = showMindMapForProfile;
window.viewDocument = viewDocument;
window.downloadDocument = downloadDocument;